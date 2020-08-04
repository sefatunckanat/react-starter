import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Store from "./hooks/Store";

import Home from "./screens/Home";
import About from "./screens/About";

function App() {
	return (
		<div className='App'>
			<Store>
				<div>Modal</div>
				<Router>
					<Switch>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</Router>
			</Store>
		</div>
	);
}

export default App;
