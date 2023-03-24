import React = require('react');

export const Counter2 = () => {
  const [count, setCount] = React.useState(0);
  const [arrayCount, setArrayCount] = React.useState([]);

  const handleIncrease = () => {
    setCount(count + 1);
    const newArray = [...arrayCount];
    //newArray.push(count);
    newArray.unshift(count);
    newArray.sort()
    setArrayCount(newArray);
  };

  const handleDecrease = () => {
    setCount(count - 1);
    const newArray = [...arrayCount];
    //newArray.pop();
    newArray.shift();
    setArrayCount(newArray);
  };

  return (
    <React.Fragment>
      <h1>Contador: {count} </h1>
      <h2>Arreglo: {arrayCount} </h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </React.Fragment>
  );
};
