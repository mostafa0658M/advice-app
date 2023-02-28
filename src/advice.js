import React from 'react';

export default function Advice({ data, changeAdvice, loading, toggleDice }) {
  return (
    <div class={loading ? 'advice-wrapper loading' : 'advice-wrapper'}>
      <p className="advice-id">Advice #{data.id}</p>
      <p className="advice">"{data.advice}"</p>
      <svg
        width="444"
        className="pattern"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
      <svg
        className="mobile-pattern"
        width="295"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
      <div
        className="dice"
        onClick={changeAdvice}
        onMouseOver={toggleDice}
        onMouseOut={toggleDice}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="hsl(217, 19%, 24%)"
          />
        </svg>
      </div>
      <div className="advice-loading">
        <span className="loading-bar"></span>
      </div>
    </div>
  );
}
