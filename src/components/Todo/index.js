import { useState } from "react";

const defaultItems = [
	{
		name: "Item A",
	},
	{
		name: "Item B",
	},
	{
		name: "Item C",
	},
];

const Todo = () => {
	const [text, setText] = useState("");
	const [items, setItems] = useState(defaultItems);
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			buttonClick();
		}
	};

	const buttonClick = () => {
		setItems((prev) => [...prev, { name: text }]);
		setText("");
	};
	return (
		<div>
			<input
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyPress={handleKeyPress}
			></input>
			<button onClick={buttonClick}>Add</button>
			<br></br>
			{items.map((item, key) => (
				<div key={key}>{item.name}</div>
			))}
		</div>
	);
};

export default Todo;
