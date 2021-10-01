import milkshake from "../images/milkshake.webp";

function SecondaryFeatureCard() {
	return (
		<div className="card--main-feature container-fluid flex-center column-reverse grid-1x2 secondary-feature">
			<div className="flex-center secondary-feature__details">
				<h2 className="card__heading">So now you're thirsty..</h2>
				<h3 className="card__description">
					Kalua Cinnamon Dolce: water down the heat with our Kalua Cinnamon
					Dolce thirst quencher.
				</h3>
				<a href="/" className="btn btn-white">
					Order now
				</a>
			</div>
			<div className="img-container">
				<img src={milkshake} alt="hamburger and fries" />
			</div>
		</div>
	);
}

export default SecondaryFeatureCard;
