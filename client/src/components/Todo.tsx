import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export type TodoItemType = {
  name: string;
  done: boolean;
};
export default function Todo() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const completedTodos = todos.reduce(
    (acc, curr) => (acc += curr.done ? 1 : 0),
    0,
  );
  const totalTodos = todos.length;
  return (
    <>
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}></Footer>
    </>
  );
}
