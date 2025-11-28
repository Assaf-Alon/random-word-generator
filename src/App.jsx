import React, { useState, useEffect } from 'react';
import WordDisplay from './components/WordDisplay';
import GenerateButton from './components/GenerateButton';
import wordService from './services/WordService';
import './App.css';

function App() {
    const [currentWord, setCurrentWord] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadWordsAndGenerateFirst();
    }, []);

    const loadWordsAndGenerateFirst = async () => {
        try {
            setLoading(true);
            setError(null);
            await wordService.loadWords();
            const word = wordService.getRandomWord();
            setCurrentWord(word);
        } catch (err) {
            setError(err.message);
            console.error('Error loading words:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleGenerateWord = () => {
        try {
            const word = wordService.getRandomWord();
            setCurrentWord(word);
        } catch (err) {
            setError(err.message);
            console.error('Error generating word:', err);
        }
    };

    return (
        <div className="app">
            <div className="app-container">
                <header className="app-header">
                    <h1 className="app-title">משחק השירים</h1>
                    <p className="app-subtitle">Name Songs with These Words</p>
                </header>

                {error && (
                    <div className="error">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="loading">Loading words</div>
                ) : (
                    <>
                        <div className="word-section">
                            <WordDisplay word={currentWord} />
                        </div>

                        <div className="button-section">
                            <GenerateButton
                                onClick={handleGenerateWord}
                                disabled={loading}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
