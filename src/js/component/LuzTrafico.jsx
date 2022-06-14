import React, { useState } from "react";
import BotonSemaforo from "./BotonSemaforo.jsx";

function LuzTrafico() {
	const [Color, setSelectedColor] = useState(" ");
	return (
		<div className="TraficLight">
			<div
				onClick={() => setSelectedColor("red")}
				className={
					"Ligth red" + (Color === "red" ? " glow" : " ")
				}></div>
			<div
				onClick={() => setSelectedColor("yellow")}
				className={
					"Ligth yellow" + (Color === "yellow" ? " glow" : " ")
				}></div>
			<div
				onClick={() => setSelectedColor("green")}
				className={
					"Ligth green" + (Color === "green" ? " glow" : " ")
				}></div>

			<BotonSemaforo
				funCambiarColor={setSelectedColor}
				colorActual={Color}></BotonSemaforo>
		</div>
	);
}
export default LuzTrafico;
