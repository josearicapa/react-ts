import React = require('react');

export const Form = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = () => {
    console.log(name);
    console.log(email);
    console.log(message);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Mensaje:
          <input type="text" onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </React.Fragment>
  );
};
