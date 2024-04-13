// todo application react foundations

import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{ title:"go to gym", description: "gotta go gym at 7am"}]);

  function addTodo() {
    const newTodo = { title: "New Todo", description: "Description of the new todo" };
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <button onClick={addTodo} >Add Todo</button>
      {todos.map((todo) => (
        <div >
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;



// if map function wasn't present but this syntax is aapparently not
// function todo(lis) {
//   <div>
//     <h1>{lis.title}</h1>
//     <h2>{lis.description}</h2>
//   </div>
// }
// for (i=0; i<todos.length; i++) {
//   todo(todos[i])
// }