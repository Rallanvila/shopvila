function MainFeatureCard() {
	return (
		<div className="card--main-feature container-fluid flex-center column-reverse grid-1x2">
			<div className="flex-center main-feature__details">
				<h2 className="card__heading">Hungry Yet??</h2>
				<h3 className="card__description">
					Habenero FlameBurger: are you a spice lord? Heat up your mouth with
					the 100% angus beef with Ghost Dusted Fries
				</h3>
				<a href="/" className="btn btn-clear">
					Order now
				</a>
			</div>
			<div className="img-container">
				<img
					src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
					alt="hamburger and fries"
				/>
			</div>
		</div>
	);
}

export default MainFeatureCard;
