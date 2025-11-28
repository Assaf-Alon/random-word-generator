import Papa from 'papaparse';

class WordService {
    constructor() {
        this.words = [];
        this.loaded = false;
        this.lastWord = null;
    }

    async loadWords() {
        if (this.loaded) {
            return this.words;
        }

        try {
            // Use Vite's base URL to ensure correct path in production
            const csvPath = `${import.meta.env.BASE_URL}hebrew-words.csv`;
            console.log('Attempting to load CSV from:', csvPath);

            const response = await fetch(csvPath);

            if (!response.ok) {
                console.error('Failed to fetch CSV:', response.status, response.statusText);
                throw new Error(`Failed to fetch CSV: ${response.status} ${response.statusText}`);
            }

            const csvText = await response.text();
            console.log('CSV loaded successfully, length:', csvText.length);

            const result = Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
            });

            this.words = result.data.filter(word => word.hebrew && word.english);
            console.log('Parsed words count:', this.words.length);

            if (this.words.length === 0) {
                throw new Error('No valid words found in CSV file');
            }

            this.loaded = true;
            return this.words;
        } catch (error) {
            console.error('Error loading words:', error);
            throw new Error(`Failed to load Hebrew words: ${error.message}`);
        }
    }

    getRandomWord() {
        if (this.words.length === 0) {
            throw new Error('No words loaded');
        }

        // Get a random word that's different from the last one
        let randomWord;
        let attempts = 0;
        const maxAttempts = 10;

        do {
            const randomIndex = Math.floor(Math.random() * this.words.length);
            randomWord = this.words[randomIndex];
            attempts++;
        } while (
            this.lastWord &&
            randomWord.hebrew === this.lastWord.hebrew &&
            attempts < maxAttempts &&
            this.words.length > 1
        );

        this.lastWord = randomWord;
        return randomWord;
    }
}

// Export a singleton instance
export default new WordService();
