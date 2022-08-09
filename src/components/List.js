import React from "react";
import "./List.css";

import ListItem from "./ListItem/ListItem";

const List = (props) => {
	const handleCompleteBtnClick = (index) => {
		let newItemList = [...props.itemList];
		newItemList[index].complete = !newItemList[index].complete;
		props.setItemList(() => newItemList);
	};

	const handleAddQuantityBtnClick = (index) => {
		let newItemList = [...props.itemList];

		newItemList[index].quantity = newItemList[index].quantity + 1;
		props.setTotal(() => props.total + 1);

		props.setItemList(() => newItemList);
	};

	const handleSubtractQuantityBtnClick = (index) => {
		let newItemList = [...props.itemList];

		newItemList[index].quantity = newItemList[index].quantity - 1;
		props.setTotal(() => props.total - 1);

		props.setItemList(() => newItemList);
	};

	return (
		<ul className="shopping-list">
			{props.itemList.map((item, index) => {
				return (
					<ListItem
						item={item}
						onCompleteClick={() => handleCompleteBtnClick(index)}
						onAddQuantityBtnClick={() => handleAddQuantityBtnClick(index)}
						onSubtractQuantityBtnClick={() =>
							handleSubtractQuantityBtnClick(index)
						}
						key={item.key}
					></ListItem>
				);
			})}
		</ul>
	);
};

export default List;
