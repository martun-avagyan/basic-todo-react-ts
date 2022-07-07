import { FC, FormEvent, useRef } from "react";

import css from "./NewTask.module.css";

const NewTask: FC<{ onAddTask: (text: string) => void }> = ({ onAddTask }) => {
  const taskTextInput = useRef<HTMLInputElement>(null);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredText = taskTextInput.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    onAddTask(enteredText);
    taskTextInput.current!.value = "";
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <label htmlFor="text">I have to</label>
      <input type="text" id="text" ref={taskTextInput} />
      <button>Add</button>
    </form>
  );
};

export default NewTask;
