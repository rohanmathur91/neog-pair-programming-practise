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

export const Solution6 = () => {
  const [items, setItems] = useState(data);
  const [deletedItems, setDeletedItems] = useState([]);

  const handleRemove = (item) => {
    setDeletedItems((prevItems) => [item, ...prevItems]);
    setItems((prevItems) => prevItems.filter(({ id }) => id != item.id));
  };

  const handleUndoRemove = (item) => {
    setItems((prevItems) => [item, ...prevItems]);
    setDeletedItems((prevItems) => prevItems.filter(({ id }) => id != item.id));
  };

  return (
    <ul>
      <>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.item}</span>
            <button onClick={() => handleRemove(item)}>remove</button>
          </li>
        ))}

        {deletedItems.length > 0 &&
          deletedItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleUndoRemove(item)}>
                undo remove
              </button>
            </li>
          ))}
      </>
    </ul>
  );
};
