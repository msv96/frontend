import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import DataContext from "./DataContext";
import env from "./Settings";

const Home = () => {
	const history = useHistory();
	const [data, setData] = useState([]);
	const { DataSet, setDataSet } = useContext(DataContext);

	useEffect(() => {
		let fetch = async () => {
			try {
				let api = await axios.get(`${env.api}/data`, {
					headers: {
						Authorization: window.localStorage.getItem("app_token"),
					},
				});
				setData([...api.data]);
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
	}, []);

	let handlelogout = (e) => {
		e.preventDefault();
		window.localStorage.removeItem("app_token");
		history.push("/");
	};

	let handleCart = (id) => {
		let ix = data.find((e) => e._id === id);
		let index = DataSet.find((el) => el._id === id);
		if (index && index._id === ix._id) {
			ix.qty++;
		} else {
			ix.qty++;
			setDataSet([...DataSet, ix]);
		}
	};

	return (
		<div className="text-center">
			<div className="d-flex flex-wrap justify-content-center my-3">
				<button
					type="submit"
					onClick={() => history.push("/cart")}
					className="btn btn-outline-success m-3"
				>
					Cart {DataSet.length}
				</button>
				<button
					type="submit"
					onClick={handlelogout}
					className="btn btn-danger m-3"
				>
					Log Out
				</button>
			</div>
			<h4 className="m-4">Veg Pizza</h4>
			<div className="d-flex flex-wrap justify-content-center">
				{data.map((e) => {
					return (
						<>
							{e.type === "veg" ? (
								<div
									className="text-center p-3 m-1"
									style={{ width: "250px" }}
								>
									<h6>{e.name}</h6>
									<img
										src={e.img}
										alt={e.name}
										style={{ width: "160px" }}
									/>
									<div>Rs. {e.price}</div>
									<button
										type="submit"
										className="m-2 btn btn-outline-dark"
										onClick={() => handleCart(e._id)}
									>
										Add to Cart
									</button>
								</div>
							) : (
								""
							)}
						</>
					);
				})}
			</div>
			<h4 className="m-4">Non-Veg Pizza</h4>
			<div className="d-flex flex-wrap justify-content-center">
				{data.map((e) => {
					return (
						<>
                            {e.type === "nonveg" ? (
								<div
									className="text-center p-3 m-1"
									style={{ width: "250px" }}
								>
									<h6>{e.name}</h6>
									<img
										src={e.img}
										alt={e.name}
										style={{ width: "160px" }}
									/>
									<div>Rs. {e.price}</div>
									<button
										type="submit"
										className="m-2 btn btn-outline-dark"
										onClick={() => handleCart(e._id)}
									>
										Add to Cart
									</button>
								</div>
							) : (
								""
							)}
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
