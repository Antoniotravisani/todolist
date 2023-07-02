function App(){
    const [todos, setTodos] = React.useState([
    {   
        text: "Estudar code",
        isComplete: false,
    },
    {
        text: "Ler contrato sapore",
        isComplete: false,
    },
    {
        text: "Revisar Ebitda",
        isComplete: false,
    },
]);
    
    const addTodo = text => {
        const newTodos = [...todos, {text: text, isComplete: false}];
        setTodos(newTodos);
    };
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    }

    return (
        <div className="app">
            <div className="todo-list">
            {todos.map((todo,i) => <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
                  <TodoForm addTodo={addTodo}/>
            </div>
         </div>  
          );
}
 ReactDOM.createRoot(document.getElementById("root")).render(<App />);
/*

ReactDOM.render(
    <App/>,
    document.getElementById("root"))
*/


