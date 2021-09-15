import React from "react";
import { useHistory } from "react-router";

const Topbar = () => {
    const history = useHistory();

	return (
		<div className="bar">
			<div className="navbar">
                <span className="topname">Fast Pizza</span>
                <span className="topname">Menu</span>
                <span className="topname">Log In</span>
                {/* onClick={() => history.push("/Menu") */}
			</div>
		</div>
	);
};

export default Topbar;
