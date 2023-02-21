import React from 'react';
import { useState, useEffect } from 'react';
import Advice from './advice';
import './style.css';

export default function App() {
  const [advice, setAdvice] = useState('');
  const changeAdvice = () => {
    setAdvice({ id: '00', advice: '...' });
    fetch('https://api.adviceslip.com/advice')
      .then((r) => r.json())
      .then((a) => setAdvice(a.slip));
  };
  useEffect(() => changeAdvice(), []);
  return (
    <div className="wrapper">
      <Advice data={advice} changeAdvice={changeAdvice} />
    </div>
  );
}
