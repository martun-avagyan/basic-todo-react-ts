import { useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import ITask from "./models/task";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const addTaskHandler = (taskText: string) => {
    setTasks(
      (prev) => (prev = [...prev, { text: taskText, id: Math.random() * 10 }])
    );
  };

  const removeTaskHandler;
  return (
    <div>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks tasks={tasks} removeTaskHandler={removeTaskHandler} />
    </div>
  );
}

export default App;
