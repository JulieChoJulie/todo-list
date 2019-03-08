import React from 'react';
import './TodoListTemplate.css';


// functional component
// parameter : (prop) => { ... }
const TodoListTemplate = ({form, children, palette}) => {
    return(
        <main className="todo-list-template">
            <div className="title">
                To do list
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
};

export default TodoListTemplate;