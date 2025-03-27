import { useState } from "react";
import styles from "./form.module.css";
import { TodoItemType } from "./Todo";

type FormProps = {
  todos: TodoItemType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

export default function Form({ todos, setTodos }: FormProps) {
  const [todo, setTodo] = useState<TodoItemType>({
    name: "",
    done: false,
  });

  function addTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (todo.name.trim() == "") {
      alert("To-do item cannot be empty.");
      return;
    }
    if (todos.some((item) => item.name.trim() === todo.name.trim())) {
      alert("This item already exists");
      return;
    }
    if (todo.name.startsWith(".") || todo.name.startsWith(",")) {
      alert("Todo item cannot start with '.' or ','.'");
      return;
    }
    setTodos([...todos, { ...todo, name: todo.name.trim().toLowerCase() }]);
    setTodo({ name: "", done: false });
  }
  return (
    <form onSubmit={addTodo}>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          className={styles.inputBox}
        />
        <button className={styles.addButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
