import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import env from "./Settings";

function Signin() {
	const history = useHistory();
	const [mail, setMail] = useState("");
	const [pwd, setPwd] = useState("");

	let handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let api = await axios.post(`${env.api}/signin`, {
				mail,
				pwd,
			});
			console.log(api);
			if (api.data.code) {
				window.localStorage.setItem("app_token", api.data.token);
				history.push("/home");
			} else {
				alert(api.data.message);
			}
			setMail("");
			setPwd("");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto" key="fhhji">
					<div className="card border-0 shadow rounded-3 my-5">
						<div className="card-body p-4 p-sm-5">
							<h2 className="card-title text-center mb-5 fs-5">
								Sign In
							</h2>
							<form onSubmit={handleSubmit}>
								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control"
										id="floatingInput"
										placeholder="name@example.com"
										value={mail}
										onChange={(e) =>
											setMail(e.target.value)
										}
										required
									/>
									<label htmlFor="floatingInput">
										Email address
									</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="password"
										className="form-control"
										id="floatingPassword"
										placeholder="Password"
										value={pwd}
										onChange={(e) => setPwd(e.target.value)}
										required
									/>
									<label htmlFor="floatingPassword">
										Password
									</label>
								</div>
								<div className="d-grid py-3">
									<button
										className="btn btn-primary btn-login text-uppercase fw-bold"
										type="submit"
									>
										Sign in
									</button>
								</div>
							</form>
							<div className="d-grid py-3">
								<button
									type="submit"
									className="btn btn-danger text-uppercase fw-bold"
									onClick={() => history.push("/forgot")}
								>
									Forgot Password ?
								</button>
							</div>
							<hr className="my-4" />
							<div className="d-grid py-3">
								<button
									type="submit"
									className="btn btn-outline-success text-uppercase fw-bold"
									onClick={() => history.push("/")}
								>
									Home
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signin;
