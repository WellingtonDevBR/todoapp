import styles from "./TaskList.module.css";
import { Trash } from "phosphor-react";
import { Checkbox } from "./Checkbox";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

interface TaskProps {
  updateTaskStatus: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
  task: Task;
}

export function TaskList(props: TaskProps) {
  function updatedTasks() {
    props.updateTaskStatus(props.task.id);
  }

  function handleDeleteTask() {
    props.deleteTask(props.task.id);
  }

  return (
    <div className={styles.task}>
      <Checkbox updatedTasks={updatedTasks} />
      <p title={props.task.completed ? "done" : "undone"}>
        {props.task.title}
      </p>
      <span onClick={handleDeleteTask}>
        <Trash size={18} color="#808080" />
      </span>
    </div>
  );
}
