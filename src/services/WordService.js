import Papa from 'papaparse';
import csvData from '/hebrew-words.csv?raw';

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
            console.log('Loading CSV data...');

            const result = Papa.parse(csvData, {
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
