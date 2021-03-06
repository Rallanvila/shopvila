import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import "./css/App.css";
import NavBar from "./components/NavBar";
import MainBanner from "./components/MainBanner";
import MainFeatureCard from "./components/MainFeatureCard";
import SecondaryFeatureCard from "./components/SecondaryFeatureCard";
import DualCard from "./components/DualCard";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";
import BottomFeature from "./components/BottomFeature";

ReactDOM.render(
	<React.StrictMode>
		<NavBar />
		<MainBanner />
		<MainFeatureCard />
		<SecondaryFeatureCard />
		<DualCard />
		<BottomFeature />
		<Footer />
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
