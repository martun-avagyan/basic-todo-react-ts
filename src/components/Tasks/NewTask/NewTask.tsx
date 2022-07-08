import { FC, useCallback, useEffect, useState } from "react";
import { INewTaskProps } from "../model";

import css from "./NewTask.module.css";

const NewTask: FC<INewTaskProps> = ({ setTasks }) => {
  const [inputValue, setInputValue] = useState("");
  const submitHandler = useCallback(() => {
    if (inputValue.trim().length === 0) {
      return;
    }
    setTasks(
      (prev) => (prev = [...prev, { text: inputValue, id: Math.random() * 10 }])
    );

    setInputValue("");
  }, [setTasks, inputValue]);

  useEffect(() => {
    const submit = (e: KeyboardEvent): void => {
      if (e.key === "Enter") {
        submitHandler();
      }
    };
    window.addEventListener("keydown", submit);
    return () => window.removeEventListener("keydown", submit);
  }, [submitHandler]);

  return (
    <div className={css.form}>
      <label htmlFor="text">I have to</label>
      <input
        type="text"
        id="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={submitHandler} type="submit">
        Add
      </button>
    </div>
  );
};

export default NewTask;
