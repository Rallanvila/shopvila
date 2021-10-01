import "../Sass/App.scss";
import logo from "../icons/logo.svg";

function NavBar() {
	return (
		<nav className="navbar">
			<div className="navbar__wrapper">
				<img src={logo} alt="logo" className="navbar-brand logo" href="/" />
				<i
					onClick={toggleMenu}
					style={{ fontSize: "1.5rem", cursor: "pointer" }}
					className="far fa-bars"
				></i>
				<div className="navbar__expanded">
					<a href="/" className="navbar__item">
						Menu
					</a>
					<a href="/" className="navbar__item">
						Rewards
					</a>
					<a href="/" className="navbar__item">
						Gift Cards
					</a>
					<div className="navbar__account">
						<a href="/" type="button" className="btn btn-light">
							Sign in
						</a>
						<a href="/" type="button" className="btn btn-dark ">
							Join Now
						</a>
						<div className="navbar__find-store">
							<i
								className="fas fa-map-marker-alt"
								style={{ fontSize: "1.5rem" }}
							></i>
							<span className="title">Find a store</span>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);

	function toggleMenu() {
		const navbarExpanded = document.querySelectorAll(".navbar__expanded");
		navbarExpanded.forEach((n) => {
			n.classList.contains("active")
				? n.classList.remove("active")
				: n.classList.add("active");
		});
	}
}

export default NavBar;
