import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';
class App extends Component {
    id = 0;
    palette = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
    state = {
        color: 0,
        input: '',
        todos: []
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        })
    };

    handleCreate = () => {
        const { input, todos} = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                color: this.palette[this.state.color]
            })
        });
    };

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleCreate();
        }
    };

    handleToggle = (id) => {
        const {todos} = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];
        const nextTodos = [...todos];
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked,
        };
        this.setState({
            todos: nextTodos
        });
    };

    handleRemove = (id) => {
        const {todos} = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        })
    };

    handleClick = (id) => {
        console.log(id)
        this.setState({
            color: id
        });
    };

    render() {
        return (
            <TodoListTemplate
                form={<Form
                        value={this.state.input}
                        onKeyPress={this.handleKeyPress}
                        onChange={this.handleChange}
                        onCreate={this.handleCreate}
                        color={this.palette[this.state.color]}/>}
                palette={<Palette
                    colors={this.palette}
                    onClick={this.handleClick}
                    selectedIndex={this.state.color}/>}
            >
                <TodoItemList
                    todos={this.state.todos}
                    onToggle={this.handleToggle}
                    onRemove={this.handleRemove} />
            </TodoListTemplate>
        );
    }
}

export default App;