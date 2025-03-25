import TodoItem from "./TodoItem";
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
    <div className="bg-[#efefef] rounded-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] my-12 mx-auto p-8 max-w-[800px] w-[90%] transition-shadow duration-300 ease-in-out hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]">
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
