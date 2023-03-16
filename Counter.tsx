import React = require('react');

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handlerIncrement = () => {
    setCount(count + 1);
  };

  const handlerDecrement = () => {
    setCount(count - 1);
  };

  return (
    <React.Fragment>
      <h1>Contador: {count}</h1>
      <button onClick={handlerIncrement}>Incrementar</button>
      <button onClick={handlerDecrement}>Decrementar</button>
    </React.Fragment>
  );
};
