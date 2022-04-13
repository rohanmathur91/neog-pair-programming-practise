import React from 'react';
import './style.css';
import {
  Solution1,
  Solution2,
  Solution3,
  Solution4,
  Solution5,
  Solution6,
} from './solutions';

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

      <h3>star question</h3>
      <Solution3 />
      <br />

      <h2>B</h2>
      <h3>question 1</h3>
      <Solution4 />
      <br />

      <h3>question 2</h3>
      <Solution5 />
      <br />

      <h3>star question</h3>
      <Solution6 />
      <br />
    </div>
  );
}
