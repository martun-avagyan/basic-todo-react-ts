import { FC } from "react";
import { ITaskItemProps } from "../../model";
import css from "./TaskItem.module.css";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskItem: FC<ITaskItemProps> = ({ text, id, onRemoveTask }) => {
  return (
    <li className={css.item}>
      {text}
      <div className={css.btns}>
        <button className={css.done}>
          <DoneIcon />
        </button>
        <button className={css.edit}>
          <EditIcon />
        </button>
        <button onClick={() => onRemoveTask(id)} className={css.delete}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
