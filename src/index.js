import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import TotalSales from "./components/TotalSales";
import CustomerCard from "./components/CustomerCard";
import "./css/App.css";
import reportWebVitals from "./reportWebVitals";
import "normalize.css";
// import Bootstrap from "bootstrap";

ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		<NavBar />
		{/* <SideNav />
		<TotalSales />
		<CustomerCard /> */}
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
