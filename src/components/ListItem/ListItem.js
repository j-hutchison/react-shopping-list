import React from "react";
import "./ListItem.css";

import Ticker from "./Ticker";

const ListItem = ({
	item,
	onCompleteClick,
	onAddQuantityBtnClick,
	onSubtractQuantityBtnClick,
}) => {
	return (
		<li className="shopping-listitem">
			<div className="item-status" onClick={onCompleteClick}>
				<a href="#">
					{item.complete && (
						<i className="fa-solid fa-check item-status-check"></i>
					)}
				</a>
			</div>
			<span className={`item-name ${item.complete && "completed"}`}>
				{item.name}
			</span>
			<Ticker
				quantity={item.quantity}
				onAddQuantityBtnClick={onAddQuantityBtnClick}
				onSubtractQuantityBtnClick={onSubtractQuantityBtnClick}
			></Ticker>
		</li>
	);
};

export default ListItem;
