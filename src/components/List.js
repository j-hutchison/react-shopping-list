import React from "react";
import "./List.css";

import ListItem from "./ListItem/ListItem";

const List = (props) => {
	return (
		<ul className="shopping-list">
			{props.itemList.map((item) => {
				return (
					<ListItem
						name={item.name}
						quantity={item.quantity}
						complete={item.complete}
						key={item.key}
					></ListItem>
				);
			})}
		</ul>
	);
};

export default List;
