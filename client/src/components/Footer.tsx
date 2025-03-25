export default function Footer({
    completedTodos,
    totalTodos,
}: {
    completedTodos: number;
    totalTodos: number;
}) {
    return (
        <div className="fixed bottom-0 text-2xl h-12 flex items-center justify-evenly font-bold text-center w-full text-[#efefef] bg-[#3f7d58] m-2.5">
            <span>Completed Todos: {completedTodos}</span>
            <span>Total Todos: {totalTodos}</span>
        </div>
    );
}
