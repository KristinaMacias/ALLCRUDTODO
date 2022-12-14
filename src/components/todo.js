import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    //hook for is editing
    const [isEditing, setIsEditing] = React.useState(false); //false by default
    //hook for editing text
    const [editingText, setEditingText] = React.useState(""); //accepts empty string by default

    // function to handle delete
    const deleteHandler = () => {
        //checks id and filters to delete
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    //function to mark an item as complete and set property to true
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) { //comparing the one clicked to the state
                return {
                    ...item, completed: !item.completed
                } //above wants to keep all original properties, except flip completed to true (originally false)
            }
            return item; //returning item if did not match
        }))
    }

    //onclick to start editing
    const editHandler = () => {
        setIsEditing(true);
    }

    //onchange to edit text
    const editChangeHandler = (e) => {
        setEditingText(e.target.value);
    }

    //onsubmit to save edit text
    const saveEditHandler = (e) => {
        e.preventDefault();
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, text: editingText
                }
            }
            return item;
        }))
        setIsEditing(false);
    }

    return (
        <div>
            <div className="todo">
                <li className={`todo-item-${todo.completed ? "completed" : ''}`}>
                    {text}
                </li>
                {/* Completed */}
                <button onClick={completeHandler} className="complete-button">Complete</button>

                {/* if isEditing is true, show the form to edit, else show the edit button */}
                {isEditing ? (
                    <form onSubmit={saveEditHandler}>
                        <input type="text" value={editingText} onChange={editChangeHandler} />
                        <button type="submit">Save</button>
                    </form>
                ) : (
                    <button onClick={editHandler} className="edit-button">Edit</button>
                    // button is always shown because it is not in the ternary
                )}

                {/* Delete */}
                <button onClick={deleteHandler} className="delete-button">Delete</button>
            </div>
        </div>
    )
}

export default Todo;