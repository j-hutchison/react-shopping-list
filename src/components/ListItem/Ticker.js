import React from "react";
import "./Ticker.css";

const Ticker = ({
	quantity,
	onAddQuantityBtnClick,
	onSubtractQuantityBtnClick,
}) => {
	return (
		<div className="ticker">
			<div
				className="ticker-btn"
				onClick={onSubtractQuantityBtnClick}
				value="-"
			>
				<i className="fa-solid fa-angle-left"></i>
			</div>
			{quantity}
			<div className="ticker-btn" onClick={onAddQuantityBtnClick} value="+">
				<i className="fa-solid fa-angle-right"></i>
			</div>
		</div>
	);
};

export default Ticker;
