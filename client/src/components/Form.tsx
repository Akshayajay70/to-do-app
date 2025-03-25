import { useState } from "react";
import { TodoItemType } from "./Todo";

type FormProps = {
    todos: TodoItemType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

export default function Form({ todos, setTodos }: FormProps) {
    const [todo, setTodo] = useState<TodoItemType>({ name: "", done: false });

    function addTodo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (todo.name.trim() === "") {
            alert("To-do item cannot be empty.");
            return;
        }
        if (todos.some((item) => item.name.trim() === todo.name.trim())) {
            alert("This item already exists");
            return;
        }
        setTodos([...todos, { ...todo, name: todo.name.trim() }]);
        setTodo({ name: "", done: false });
    }

    return (
        <form onSubmit={addTodo}>
            <div className="flex flex-wrap items-center justify-center gap-4 p-6 my-12 mx-auto max-w-[700px] bg-[#f4f4f4] rounded-[10px] shadow-[6px_6px_12px_rgba(0,0,0,0.1)]">
                <input
                    type="text"
                    value={todo.name}
                    onChange={(e) => setTodo({ name: e.target.value, done: false })}
                    className="flex-1 min-w-[200px] border-0 bg-[#3f7d58] h-10 rounded-[6px] text-[#efefef] px-3 text-base transition-colors duration-300 ease-in-out focus:outline-none focus:bg-[#356749]"
                />
                <button
                    type="submit"
                    className="border-0 bg-[#3f7d58] text-[#efefef] px-6 h-10 rounded-[6px] font-semibold text-base cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#356749]"
                >
                    Add
                </button>
            </div>
        </form>
    );
}
