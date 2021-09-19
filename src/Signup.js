import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import env from "./Settings";

const Signup = () => {
	const history = useHistory();
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [pwd, setPwd] = useState("");
	const [add1, setAdd1] = useState("");
	const [add2, setAdd2] = useState("");

	let handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let apidata = await axios.post(`${env.api}/register`, {
				name,
				mail,
				pwd,
				add1,
				add2,
			});
			if (apidata.data.code) {
				history.push("/signin");
			} else {
				alert(apidata.data.message);
				setName("");
				setMail("");
				setPwd("");
				setAdd1("");
				setAdd2("");
			}
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
							<h2 className="text-center mb-5 fs-5">Sign Up</h2>
							<form onSubmit={handleSubmit}>
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingname"
										placeholder="name@example.com"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
										required
									/>
									<label htmlFor="floatingname">Name</label>
								</div>
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
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingaddress"
										placeholder="Address 1"
										value={add1}
										onChange={(e) =>
											setAdd1(e.target.value)
										}
										required
									/>
									<label htmlFor="floatingaddress">
										Address 1
									</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingaddress2"
										placeholder="Address 1"
										value={add2}
										onChange={(e) =>
											setAdd2(e.target.value)
										}
										required
									/>
									<label htmlFor="floatingaddress2">
										Address 2
									</label>
								</div>
								<div className="d-grid py-3">
									<button
										className="btn btn-primary btn-login text-uppercase fw-bold"
										type="submit"
									>
										Sign up
									</button>
								</div>
							</form>
							<div className="d-grid py-3">
								<button
									type="submit"
									className="btn btn-danger text-uppercase fw-bold"
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
};

export default Signup;
