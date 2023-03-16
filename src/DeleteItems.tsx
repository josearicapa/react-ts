import React = require('react');

interface DeleteItemsPros {
  items: Array<string>;
}

export const DeleteItems: React.FC<DeleteItemsPros> = ({ items }) => {
  const [listItems, setListItems] = React.useState(items || []);

  const handleDelete = (index) => {
    const newItems = [...listItems];
    newItems.splice(index, 1);
    setListItems(newItems);
  };

  return (
    <React.Fragment>
      <h1>Lista de Items {listItems.length}</h1>
      <ul>
        {listItems.map((text, index) => (
          <li key={index}>
            {text}
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
