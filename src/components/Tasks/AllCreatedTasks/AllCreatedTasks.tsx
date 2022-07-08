import React, { FC, useCallback } from "react";
import TaskItem from "./TaskItem/TaskItem";

import css from "./AllCreatedTasks.module.css";
import { IAllCreatedTasksProps } from "../model";

const AllCreatedTasks: FC<IAllCreatedTasksProps> = ({ tasks, setTasks }) => {
  const removeTaskHandler = useCallback(
    (id: number) => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== id);
      });
    },
    [setTasks]
  );

  return (
    <ul className={css.tasks}>
      {tasks.map(({ id, text }) => (
        <TaskItem
          key={id}
          onRemoveTask={removeTaskHandler}
          text={text}
          id={id}
        />
      ))}
    </ul>
  );
};

export default AllCreatedTasks;
