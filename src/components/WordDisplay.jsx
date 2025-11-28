import React from 'react';
import './WordDisplay.css';

const WordDisplay = ({ word }) => {
    if (!word) {
        return null;
    }

    return (
        <div className="word-display fade-in">
            <div className="hebrew-word">
                {word.hebrew}
            </div>
            <div className="english-translation">
                {word.english}
            </div>
            {word.category && (
                <div className="word-category">
                    {word.category}
                </div>
            )}
        </div>
    );
};

export default WordDisplay;
