import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ digit1, digit2, digit3, digit4, digit5, digit6 }) => {
	return (
		<div className="text-center">
			<main className="text-center">
				<section className="counter-holder">
					<div className="digit"><span className="fa fa-clock"></span></div>
					<div className="digit">{digit1}</div>
					<div className="digit">{digit2}</div>
					<div className="digit">{digit3}</div>
					<div className="digit">{digit4}</div>
					<div className="digit">{digit5}</div>
					<div className="digit">{digit6}</div>
				</section>
			</main>
		</div>
	);
};

export default Home;