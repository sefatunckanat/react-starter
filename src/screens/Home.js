import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../hooks/Store";

import Button from "../components/Button"

function Home() {
	const [state, dispatch] = useContext(Context);

	return (
		<div>
			<h1>Home</h1>

			<Button label={"Say Hi!"} isActive={true} />
			<Button label={"Say Hello!"} />
			<hr />

			<input
				value={state.note}
				onChange={(e) => {
					dispatch({ type: "SET_NOTE", payload: e.target.value });
				}}
			/>
			<br />
			{state.note}
			<Link to='/about'>About</Link>
		</div>
	);
}

export default Home;
