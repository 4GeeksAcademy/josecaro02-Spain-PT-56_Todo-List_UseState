import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//  const[variable,funcion que la modifica] = useState(valor por defecto)
	// cuando la variable se actualiza el componente se re-renderiza    
	const [name, setName] = useState("")
	return (
		<div className="text-center mt-5 container">
			<div className="input-group flex-nowrap">
				<span className="input-group-text" id="addon-wrapping">Mi nombre</span>
				<input type="text" className="form-control" placeholder="Ingresa tu nombre"
					aria-label="Username" aria-describedby="addon-wrapping"
					value={name}
					onChange={(e) => {
						console.log(e.target.value)
						setName(e.target.value)
					}} />
			</div>
			<button className="btn btn-danger mt-3" onClick={() => {
				setName("")
			}}>Limpiar</button>
			<h1>Mi nombre es: {name}</h1>
		</div>
	);
};

export default Home;
