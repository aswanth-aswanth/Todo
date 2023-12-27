import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, removeTask, editTask, completeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          editTask={editTask}
          completeTask={completeTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
