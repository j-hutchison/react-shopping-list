import React, { useState } from "react";

import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import ListSummary from "./components/ListSummary";

function App() {
	const data = [
		{
			name: "Item 1",
			quantity: 1,
			complete: false,
			key: Math.floor(Math.random() * 1000),
		},
		{
			name: "Item 2",
			quantity: 2,
			complete: false,
			key: Math.floor(Math.random() * 1000),
		},
	];

	const handleAddBtnClick = (inputValue) => {
		setItemList(() => {
			const newItem = {
				name: inputValue,
				quantity: 1,
				complete: false,
				key: Math.floor(Math.random() * 1000),
			};
			const newItemList = [...itemList, newItem];
			return newItemList;
		});
	};

	const handleCompleteBtnClick = () => {};

	const [total, setTotal] = useState(3);
	const [itemList, setItemList] = useState(data);

	return (
		<div className="App">
			<form className="shopping-list-form">
				<Input onClick={handleAddBtnClick}></Input>
				<List itemList={itemList}></List>
				<ListSummary total={total}></ListSummary>
			</form>
		</div>
	);
}

export default App;
