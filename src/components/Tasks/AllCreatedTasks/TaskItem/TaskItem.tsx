import { FC } from "react";
import { ITaskItemProps } from "../../model";
import css from "./TaskItem.module.css";

const TaskItem: FC<ITaskItemProps> = ({ text, id, onRemoveTask }) => {
  return (
    <li onClick={() => onRemoveTask(id)} className={css.item}>
      {text}
    </li>
  );
};

export default TaskItem;
