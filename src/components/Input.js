import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (e) => {
		const input = e.target.value;
		setInputValue(() => input);
	};

	const onInputSubmit = (e) => {
		e.preventDefault();
		props.onClick(inputValue);
		setInputValue(() => "");
	};

	return (
		<div className="input-toolbar">
			<input
				className="input-searchbar"
				type="text"
				placeholder="Add an item..."
				value={inputValue}
				onChange={onInputChange}
			/>
			<a className="input-add-btn" href="#" onClick={onInputSubmit}>
				<i className="fa-solid fa-plus"></i>
			</a>
		</div>
	);
};

export default Input;
