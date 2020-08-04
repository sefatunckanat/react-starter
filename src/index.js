import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var savedToken = localStorage.getItem("Token");

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
