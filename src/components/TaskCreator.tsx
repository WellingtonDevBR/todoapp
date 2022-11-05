import styles from "./TaskCreator.module.css";
import Logo from "../assets/logo.svg";
import { useState, KeyboardEvent, ChangeEvent, FormEvent } from "react";

export function TaskCreator(props: any) {
  const [onChangeTextArea, setOnChangeTextArea] = useState("");

  function handleChangeTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
    setOnChangeTextArea(e.target.value);
  }

  function handleCreateNewTask(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    props.createNewTask({
      id: Math.random(),
      title: onChangeTextArea,
      completed: false,
    });
    setOnChangeTextArea("");
  }

  function handleNotAllowNewLine(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  return (
    <header>
      <img src={Logo} />
      <section className={styles.createTask}>
        <textarea
          onChange={handleChangeTextArea}
          placeholder="Adicione uma nova tarefa"
          required
          value={onChangeTextArea}
          rows={2}
          onKeyDown={handleNotAllowNewLine}
          maxLength={150}
        />
        {onChangeTextArea.length > 0 ? (
          <button onClick={handleCreateNewTask}>Criar</button>
        ) : (
          <button disabled onClick={handleCreateNewTask}>
            Criar
          </button>
        )}
      </section>
    </header>
  );
}
