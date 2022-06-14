import React from "react";

function BotonSemaforo(props) {
	let CambiarColor = (funcion, color) => {
		let newVariable = "";
		let Colores = ["red", "yellow", "green"];

		let index = Colores.indexOf(color);
		if (index === Colores.length - 1) {
			newVariable = Colores[0];
		} else {
			newVariable = Colores[index + 1];
		}

		funcion(newVariable);
	};

	return (
		<>
			<button
				onClick={() => {
					CambiarColor(props.funCambiarColor, props.colorActual);
				}}>
				¡CAMBIALO!
			</button>
		</>
	);
}
export default BotonSemaforo;
