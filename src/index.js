import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Card extends React.Component {
	render() {
		return(
			<div className="card">
				<div className="like">&lt;3</div>
				^_^
				<h6>Ня</h6>
			</div>
		)
	}
}


ReactDOM.render(
	<div className="wrapper">
		{/* <div className="card">=)</div>
		<div className="card">o_0</div>
		<div className="card">^_^</div>
		<div className="card">=(</div> */}
		<Card/>
		<Card/>
		<Card/>
		<Card/>
	</div>,
	document.querySelector("#root")
)
