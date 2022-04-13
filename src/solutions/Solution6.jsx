import React, { useState } from 'react';

const data = [
  {
    id: 1,
    item: 'JavaScript',
  },
  {
    id: 2,
    item: 'Python',
  },
  {
    id: 3,
    item: 'Scala',
  },
  {
    id: 4,
    item: 'Solidity',
  },
  {
    id: 5,
    item: 'C++',
  },
];

export const Solution5 = () => {
  const [items, setItems] = useState(data);

  const handleRemove = (id) => {
    setItems((prevItems) => prevItems.filter((item) => id != item.id));
  };

  return (
    <ul>
      {items.map(({ id, item }) => (
        <li key={id}>
          <span>{item}</span>
          <button onClick={() => handleRemove(id)}>remove</button>
        </li>
      ))}
    </ul>
  );
};
