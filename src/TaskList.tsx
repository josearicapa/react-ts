import React = require('react');

export const TaskList = ({ tasks }) => {
  const [taskList, setTaskList] = React.useState(tasks || []);

  const handleCompleted = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].completed = !newTaskList[index].completed;
    setTaskList(newTaskList);
  };

  const handleDelete = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  return (
    <React.Fragment>
      <h1>Lista de tareas</h1>
      {taskList.map((task, index) => (
        <ul>
          <li
            key={index}
            style={task.completed ? { textDecoration: 'line-through' } : {}}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleted(index)}
            />
            {task.title}
            <button onClick={handleDelete}>Eliminar</button>
          </li>
        </ul>
      ))}
    </React.Fragment>
  );
};
