import React from 'react';
import './style.css';
import { Solution1, Solution2, Solution3 } from './solutions';

export default function App() {
  return (
    <div>
      <h2>A</h2>
      <h3>question 1</h3>
      <Solution1 />
      <br />

      <h3>question 2</h3>
      <Solution2 />
      <br />

      <h3>star question </h3>
      <Solution3 />
      <br />
    </div>
  );
}
