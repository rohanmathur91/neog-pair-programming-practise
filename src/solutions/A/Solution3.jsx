import React, { useState } from 'react';

// Extension of question02 - show the total price at the end of the list which would be the sum of (price * quantity) for all items

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

export const Solution3 = () => {
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

  const totalPrice = items.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );

  return (
    <>
      <ul>
        {items.map(({ id, item, price, quantity }) => (
          <li key={id}>
            {item} ( {price}$ ){' '}
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

      <p>Total - {totalPrice}$</p>
    </>
  );
};
