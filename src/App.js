import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route to="/" exact>
						<Topbar />
					</Route>
					<Route to="/menu" exact></Route>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
