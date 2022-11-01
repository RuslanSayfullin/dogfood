import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Card extends React.Component {
	render() {
		return(
			<div className="card">
				<div className="like">&lt;3</div>
				{this.props.smile}
				<h6>{this.props.text}</h6>
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
		<Card smile="=)" text="Ы." />
		<Card smile="0_o" text="Ooo..." />
		<Card smile="^_^" text="МММ ня" />
		<Card smile="=(" text="Уф" />
	</div>,
	document.querySelector("#root")
)
