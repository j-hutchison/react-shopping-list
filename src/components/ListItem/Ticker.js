import React from "react";
import "./Ticker.css";

const Ticker = (props) => {
	return (
		<div className="ticker">
			<a href="">
				<i className="fa-solid fa-angle-left"></i>
			</a>
			{props.quantity}
			<a href="">
				<i className="fa-solid fa-angle-right"></i>
			</a>
		</div>
	);
};

export default Ticker;
