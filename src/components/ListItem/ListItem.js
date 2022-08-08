import React from "react";
import "./ListItem.css";

import Ticker from "./Ticker";

const ListItem = ({ quantity, name, complete }) => {
	const onCompleteBtnClick = () => {};

	return (
		<li className="shopping-listitem">
			<div className="item-status">
				<a href="" onClick={onCompleteBtnClick}>
					{complete && <i className="fa-solid fa-check item-status-check"></i>}
				</a>
			</div>
			<span className={`item-name ${complete && "completed"}`}>{name}</span>
			<Ticker quantity={quantity}></Ticker>
		</li>
	);
};

export default ListItem;
