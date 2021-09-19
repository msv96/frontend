import React, { useContext } from "react";
import { useHistory } from "react-router";
import DataContext from "./DataContext";

const Cart = () => {
	const history = useHistory();
	const { DataSet, setDataSet } = useContext(DataContext);

	return (
		<>
			{DataSet.map((e) => {
				return (
					<div className="container">
						<div className="row">
							<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
								<h4>{e.name}</h4>
								<p>
									{e.qty} * {e.price} = Rs. {e.qty * e.price}
								</p>
								<button
									type="submit"
									className="m-2 btn btn-outline-dark"
									onClick={() => history.push("/home")}
								>
									Home
								</button>
							</div>
						</div>
					</div>
				);
			})}
			{DataSet.length === 0 ? (
				<h2>Your Cart is Empty</h2>
			) : (
				<>
				<h3>
					Grand Total : Rs.
					{DataSet.map((e) => e.qty * e.price).reduce(
						(a, b) => a + b
					)}
				</h3>
				<div>* Inclusive of all taxes</div>
				</>
			)}
		</>
	);
};

export default Cart;
