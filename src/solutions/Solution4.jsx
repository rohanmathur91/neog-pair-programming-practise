import React, { useState } from 'react';

const data = [
  {
    id: 1,
    mail: 'tanay@neog.camp',
  },
  {
    id: 2,
    mail: 'tanvi@neog.camp',
  },
  {
    id: 3,
    mail: 'akanksha@neog.camp',
  },
  {
    id: 4,
    mail: 'parul@neog.camp',
  },
  {
    id: 5,
    mail: 'kishan@neog.camp',
  },
];

export const Solution4 = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessage(
      data.some(({ mail }) => mail === email)
        ? 'Email is already subscribed'
        : 'You are now subscribed'
    );
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input required type="email" onChange={handleEmailChange} />
        <button>Subscribe</button>
      </form>

      <p>{message}</p>
    </>
  );
};
