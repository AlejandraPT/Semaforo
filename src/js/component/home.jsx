import React from "react";

import BotonSemaforo from "./BotonSemaforo.jsx";
import LuzTrafico from "./LuzTrafico.jsx";

//create your first component
const Home = () => {
	return (
		<div className="semaforo">
			<div className="palo"></div>
			<LuzTrafico />
		</div>
	);
};

export default Home;
