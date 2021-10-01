import group from "../images/group.png";

function BottomFeature() {
	return (
		<div className="card--main-feature container-fluid flex-center column-reverse grid-1x2 bottom-feature">
			<div className="flex-center main-feature__details bottom-feature">
				<h2 className="card__heading bottom-feature">Hungry Yet??</h2>
				<h3 className="card__description bottom-feature">
					Habenero FlameBurger: are you a spice lord? Heat up your mouth with
					the 100% angus beef with Ghost Dusted Fries
				</h3>
				<a href="/" className="btn btn-clear">
					Order now
				</a>
			</div>
			<div className="img-container bottom-feature">
				<img src={group} alt="hamburger and fries" />
			</div>
		</div>
	);
}

export default BottomFeature;
