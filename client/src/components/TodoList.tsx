import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
import { TodoItemType } from "./Todo";

type TodoListProps = {
  todos: TodoItemType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};
export default function TodoList({ todos, setTodos }: TodoListProps) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
