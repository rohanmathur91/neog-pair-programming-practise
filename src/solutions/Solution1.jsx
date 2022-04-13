import React, { useState } from 'react';

const data = [
  {
    id: 1,
    item: 'shoes',
    price: 100,
  },
  {
    id: 2,
    item: 'jacket',
    price: 400,
  },
  {
    id: 3,
    item: 'hat',
    price: 50,
  },
  {
    id: 4,
    item: 'sunglasses',
    price: 250,
  },
  {
    id: 5,
    item: 'gloves',
    price: 300,
  },
];

export const Solution1 = () => {
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(1000);

  const handleLowerLimit = (e) => {
    setLowerLimit(e.target.value);
  };

  const handleUpperLimit = (e) => {
    setUpperLimit(e.target.value);
  };

  const getFilteredData = data.filter(
    ({ price }) => lowerLimit <= price && price <= upperLimit
  );

  return (
    <div>
      <label htmlFor="lower-limit">Lower limit: </label>
      <input onChange={handleLowerLimit} type="number" id="lower-limit" />
      <br />
      <label htmlFor="upper-limit">Upper limit: </label>
      <input onChange={handleUpperLimit} type="number" id="upper-limit" />

      <ul>
        {getFilteredData.map(({ id, item, price }) => (
          <li key={id}>
            {item} - ${price}
          </li>
        ))}
      </ul>
    </div>
  );
};
