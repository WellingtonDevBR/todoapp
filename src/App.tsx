import { useState } from "react";
import Clipboard from "./assets/Clipboard.svg";
import styles from "./App.module.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskList } from "./components/TaskList";
import "./Global.css";

interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [concludedTasksCounter, setConcludedTasksCounter] = useState(0);
  const numberOfTasks = tasks.length;

  function handleCreateNewTask(task: TaskProps) {
    setTasks([...tasks, task]);
  }

  function handleUpdateTaskStatus(taskId: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
    setConcludedTasksCounter(tasks.filter((task) => task.completed).length);
  }

  function handleDeleteTask(taskId: number) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <div className={styles.global}>
      <TaskCreator createNewTask={handleCreateNewTask} />
      <main>
        <header>
          <h4>
            Tarefas criadas <span>{numberOfTasks}</span>
          </h4>
          <h4>
            Concluídas{" "}
            <span>
              {numberOfTasks === 0
                ? 0
                : concludedTasksCounter + " de " + numberOfTasks}
            </span>
          </h4>
        </header>
        {tasks.length === 0 ? (
          <section>
            <img src={Clipboard} />
            <h4>Você ainda não tem tarefas cadastradas</h4>
            <h4>Crie tarefas e organize seus itens a fazer</h4>
          </section>
        ) : (
          tasks.map((task) => {
            return (
              <TaskList
                key={task.id}
                task={task}
                updateTaskStatus={handleUpdateTaskStatus}
                deleteTask={handleDeleteTask}
              />
            );
          })
        )}
      </main>
    </div>
  );
}
