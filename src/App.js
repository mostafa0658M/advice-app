import React from 'react';
import { useState, useEffect } from 'react';
import Advice from './advice';
import './style.css';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);
  const changeAdvice = () => {
    setLoading(true);
    fetch('https://api.adviceslip.com/advice')
      .then((r) => r.json())
      .then((a) => {
        setAdvice(a.slip);

        setTimeout(() => setLoading(false), 900);
      });
  };
  useEffect(() => changeAdvice(), []);
  const toggleDice = () => {
    document.querySelector('.wrapper > svg').classList.toggle('active');
  };
  return (
    <div className="wrapper">
      <Advice
        data={advice}
        changeAdvice={changeAdvice}
        loading={loading}
        toggleDice={toggleDice}
      />
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
