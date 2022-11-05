import styles from "./Checkbox.module.css";
import React from "react";

interface CheckboxProps {
  updatedTasks: () => void;
}

export function Checkbox(props: CheckboxProps): React.ReactElement {
  function handleCheckboxClick() {
    props.updatedTasks();
  }

  return (
    <label className={styles.container}>
      <input onClick={handleCheckboxClick} type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
}
