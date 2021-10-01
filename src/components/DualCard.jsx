import money from "../icons/money.svg";
import winner from "../icons/winner.svg";

function DualCard() {
	return (
		<div className="card--main-feature flex-center container-fluid flex-center grid-1x2 grid--gap">
			<div className="dual-card">
				<div className="img-container">
					<img src={winner} alt="hamburger and fries" />
				</div>
				<div className="flex-center main-feature__details">
					<h2 className="card__heading">Order Online</h2>
					<h3 className="card__description">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
						amet aliquam at necessitatibus tempora eaque.
					</h3>
					<a href="/" className="btn btn-clear">
						Order now
					</a>
				</div>
			</div>
			<div className="dual-card">
				<div className="img-container">
					<img src={money} alt="hamburger and fries" />
				</div>
				<div className="flex-center main-feature__details">
					<h2 className="card__heading">Get rewarded</h2>
					<h3 className="card__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
						fuga natus repudiandae voluptate beatae aperiam?
					</h3>
					<a href="/" className="btn btn-clear">
						Sign Up
					</a>
				</div>
			</div>
		</div>
	);
}

export default DualCard;
