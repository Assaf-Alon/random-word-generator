import React from 'react';
import './GenerateButton.css';

const GenerateButton = ({ onClick, disabled }) => {
    return (
        <button
            className="generate-button"
            onClick={onClick}
            disabled={disabled}
        >
            <span className="button-text">Generate New Word</span>
            <span className="button-icon">✨</span>
        </button>
    );
};

export default GenerateButton;
