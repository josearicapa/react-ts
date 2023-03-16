import * as React from 'react';
import { Counter } from './Counter';
import { TaskList } from './src/TaskList';
import './style.css';

export default function App() {
  const task = [
    { title: 'Item 1 ', complete: false },
    { title: 'Item 2 ', complete: false },
  ];
  return (
    <React.Fragment>
      <TaskList tasks={task} />
    </React.Fragment>
  );
}
