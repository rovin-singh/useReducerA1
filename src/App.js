import { useReducer, useState } from "react";
import "./styles.css";
function reducer(state, action) {
  switch (action.type) {
    case "addTodo":
      return {
        todos: [
          ...state.todos,
          { text: action.text, completed: false, id: state.todos.length }
        ]
      };
    default:
      return state;
  }
}
function App() {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState("");
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "addTodo", text });
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          placeholder="Enter Something"
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="add" />
      </form>

      {todos.map((data) => (
        <div key={data.id}>
          <p>
            {data.text}: {data.id}
          </p>
        </div>
      ))}
    </div>
  );
}
export default App;
