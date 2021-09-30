import logo from "../icons/logo.svg";

function TotalSales() {
	return (
		<div className="total-sales container">
			<h2 className="heading">Today's Net Sales</h2>
			<img src={logo} alt="logo" className="navbar-brand logo" href="/" />
		</div>
	);
}

export default TotalSales;
