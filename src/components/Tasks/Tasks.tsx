import { useState } from "react";
import ITask from "../../models/task";
import NewTask from "./NewTask/NewTask";
import AllCreatedTasks from "./AllCreatedTasks/AllCreatedTasks";
const Tasks = (): JSX.Element => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <div>
      <NewTask setTasks={setTasks} />
      <AllCreatedTasks setTasks={setTasks} tasks={tasks} />
    </div>
  );
};

export default Tasks;
