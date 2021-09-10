import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route to="/" exact></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
