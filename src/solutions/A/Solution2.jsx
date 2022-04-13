import React, { useState } from 'react';

// You have a list of items with price and quantity. Create two buttons for each and every element in the data list. One will increment the quantity of the particular item, and one will decrement the quantity. Show all details of the items on the page.

const data = [
  {
    id: 1,
    item: 'shoes',
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    item: 'jacket',
    price: 400,
    quantity: 1,
  },
  {
    id: 3,
    item: 'hat',
    price: 50,
    quantity: 1,
  },
  {
    id: 4,
    item: 'sunglasses',
    price: 250,
    quantity: 1,
  },
  {
    id: 5,
    item: 'gloves',
    price: 300,
    quantity: 1,
  },
];

export const Solution2 = () => {
  const [items, setItems] = useState(data);

  const handleQuantityUpdate = (id, type) => {
    setItems((items) =>
      items.map((item) =>
        id === item.id
          ? {
              ...item,
              quantity:
                type === 'increment'
                  ? item.quantity + 1
                  : item.quantity === 1
                  ? item.quantity
                  : item.quantity - 1,
            }
          : item
      )
    );
  };

  return (
    <ul>
      {items.map(({ id, item, price, quantity }) => (
        <li key={id}>
          {item} ( ${price} ){' '}
          <button onClick={() => handleQuantityUpdate(id, 'decrement')}>
            -
          </button>{' '}
          <span>{quantity}</span>
          <button onClick={() => handleQuantityUpdate(id, 'increment')}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
};
