function Footer() {
	return (
		<footer className="footer">
			<div className="collapsible">
				<header className="collapsible__header">
					<h2 className="collapsible__heading">About Us</h2>
					<i
						onClick={handleClick}
						className="icon icon--white far fa-chevron-down"
					></i>
				</header>
				<div className="collapsible__content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
					pariatur voluptates provident doloribus delectus fugiat iste
					recusandae totam veniam possimus.
				</div>
			</div>
			<div className="collapsible">
				<header className="collapsible__header">
					<h2 className="collapsible__heading">Careers</h2>
					<i
						onClick={handleClick}
						className="icon icon--white far fa-chevron-down"
					></i>
				</header>
				<div className="collapsible__content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
					pariatur voluptates provident doloribus delectus fugiat iste
					recusandae totam veniam possimus.
				</div>
			</div>
			<div className="collapsible">
				<header className="collapsible__header">
					<h2 className="collapsible__heading">Order and Pickup</h2>
					<i
						onClick={handleClick}
						className="icon icon--white far fa-chevron-down"
					></i>
				</header>
				<div className="collapsible__content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
					pariatur voluptates provident doloribus delectus fugiat iste
					recusandae totam veniam possimus.
				</div>
			</div>
			<div className="footer__social">
				<i class="fab fa-facebook-f"></i>
				<i class="fab fa-instagram"></i>
				<i class="fab fa-youtube"></i>
				<i class="fab fa-twitter"></i>
			</div>
			<h2 className="footer__section">Privacy Policy</h2>
			<h2 className="footer__section">Terms of Use</h2>
			<h2 className="footer__section">Hire me!</h2>
		</footer>
	);

	function handleClick() {
		const collapsibleContent = document.querySelectorAll(".collapsible");

		// collapsibleContent.forEach((c) =>
		// 	c.classList.contains("collapsible--expanded")
		// 		? c.classList.remove("collapsible--expanded")
		// 		: c.classList.add("collapsible--expanded"),
		// );
		collapsibleContent.forEach((c) =>
			c.addEventListener("click", function () {
				// this.classList.toggle("collapsible--expanded");
				this.classList.contains("collapsible--expanded")
					? this.classList.remove("collapsible--expanded")
					: this.classList.add("collapsible--expanded");
			}),
		);
	}
}

export default Footer;
