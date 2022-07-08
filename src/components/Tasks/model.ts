import ITask from "../../models/task";

export interface INewTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export interface IAllCreatedTasksProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export interface ITaskItemProps {
  text: string;
  onRemoveTask: (id: number) => void;
  id: number;
}
