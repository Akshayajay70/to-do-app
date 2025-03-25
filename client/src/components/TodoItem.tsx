import { TodoItemType } from "./Todo";

type TodoItemProps = {
    item: TodoItemType;
    todos: TodoItemType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

export default function TodoItem({ item, todos, setTodos }: TodoItemProps) {
    function handleDelete(name: string) {
        const authenticate = confirm("Are you sure you want to delete this item");
        if (authenticate) {
            setTodos(todos.filter((todo) => todo.name !== name));
        }
    }

    function handleDone(name: string) {
        setTodos(
            todos.map((todo) =>
                todo.name === name ? { ...todo, done: !todo.done } : todo
            )
        );
    }

    return (
        <>
            <div className="flex justify-between text-xl">
                <div className="font-bold p-[2px]">
                    <span
                        onClick={() => handleDone(item.name)}
                        className={`cursor-pointer ${item.done ? "line-through" : ""}`}
                    >
                        {item.name}
                    </span>
                </div>
                <button
                    onClick={() => handleDelete(item.name)}
                    className="py-2 px-3 bg-[#3f7d58] text-[#bbeace] rounded-[6px] cursor-pointer"
                >
                    X
                </button>
            </div>
            <hr className="border border-[#bbeace]" />
        </>
    );
}
