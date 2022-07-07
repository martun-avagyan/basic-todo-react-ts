import { FC } from "react";
import TaskItem from "../TaskItem/TaskItem";
import ITask from "../../models/task";
import css from "./Tasks.module.css";

const Tasks: FC<{ tasks: ITask[]; removeTaskHandler: () => void }> = ({
  tasks,
  removeTaskHandler,
}) => {
  return (
    <ul className={css.tasks}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          onRemoveTask={removeTaskHandler}
          text={task.text}
        />
      ))}
    </ul>
  );
};

export default Tasks;
