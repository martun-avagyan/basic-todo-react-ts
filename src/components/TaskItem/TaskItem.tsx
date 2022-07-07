import { FC } from "react";
import css from "./TaskItem.module.css";
const TaskItem: FC<{ text: string; onRemoveTask: () => void }> = ({
  text,
  onRemoveTask,
}) => {
  return (
    <li onClick={onRemoveTask} className={css.item}>
      {text}
    </li>
  );
};

export default TaskItem;
