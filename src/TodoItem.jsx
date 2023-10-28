export function TodoItem({completed, id, title, toggleTodo, deleteTodo}){
    return (
    <li>
        <label>
            {title}
            <input 
            type="checkbox" 
            checked = {completed} 
            onChange={e => toggleTodo(id, e.target.checked)}
            />
        </label>
        <button 
            onClick={() =>  deleteTodo(id)} 
            className="btn btn-danger"
        >
            Delete
        </button>
    </li>
    )
}