import { useState } from "react";
import styles from "./todoitem.module.css";
import { TodoItemType } from "./Todo";

import { MdEdit, MdDelete } from "react-icons/md";

type TodoItemProps = {
  item: TodoItemType;
  todos: TodoItemType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

export default function TodoItem({ item, todos, setTodos }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);

  function handleDelete(name: string) {
    const authenticate = confirm("Are you sure you want to delete this item");
    if (authenticate) {
      setTodos(todos.filter((todo) => todo.name !== name));
    }
  }

  function handleDone(name: string) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function saveEdit() {
    const trimmedName = editedName.trim();

    if (trimmedName === "") {
      alert("To-do item cannot be empty.");
      setIsEditing(false);
      return;
    }

    if (trimmedName.startsWith(".") || trimmedName.startsWith(",")) {
      alert("Todo item cannot start with '.' or ','.");
      setIsEditing(false);
      return;
    }

    if (
      todos.some(
        (todo) => todo.name.trim() === trimmedName && todo.name !== item.name,
      )
    ) {
      alert("This item already exists");
      setIsEditing(false);
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, name: trimmedName } : todo,
      ),
    );
    setIsEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      saveEdit();
    }
  }

  const itemClass = item.done ? styles.completed : "";

  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              onBlur={saveEdit}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <span className={itemClass} onClick={() => handleDone(item.name)}>
              {item.name}
            </span>
          )}
        </div>

        <button onClick={handleEdit} className={styles.editButton}>
          <MdEdit />
        </button>
        <button
          onClick={() => handleDelete(item.name)}
          className={styles.deleteButton}
        >
          <MdDelete />
        </button>
      </div>
      <hr className={styles.line} />
    </>
  );
}
