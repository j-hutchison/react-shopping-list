import React from "react";
import "./ListSummary.css";

const ListSummary = (props) => {
	return (
		<div className="shopping-list-summary">
			<span className="shopping-list-total">Total: {props.total}</span>
		</div>
	);
};

export default ListSummary;
