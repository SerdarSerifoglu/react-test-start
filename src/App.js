import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
	return (
		<div className="App">
			<Counter />
			<br></br>
			<hr></hr>
			<Todo></Todo>
		</div>
	);
}

export default App;
