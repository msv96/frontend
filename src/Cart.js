import React, { useContext } from "react";
import { useHistory } from "react-router";
import DataContext from "./DataContext";

const Cart = () => {
	const history = useHistory();
	const { DataSet, setDataSet } = useContext(DataContext);

	let handleMinus = (id) => {
		let index = DataSet.findIndex((el) => el._id === id);
		DataSet[index].qty--;
		setDataSet([...DataSet]);
	};

	let handlePlus = (id) => {
		let index = DataSet.findIndex((el) => el._id === id);
		DataSet[index].qty++;
		setDataSet([...DataSet]);
	};

	let handleRemove = (id) => {
		let index = DataSet.findIndex((el) => el._id === id);
		DataSet[index].qty = 0;
		DataSet.splice(index, 1);
		setDataSet([...DataSet]);
	};

	let handleOrder = () => {
		setDataSet([]);
		history.push("/home");
	};

	return (
		<div className="text-center">
			{DataSet.length === 0 ? (
				<>
					<h2>Your Cart is Empty</h2>
					<button
						type="submit"
						className="m-2 btn btn-outline-dark"
						onClick={() => history.push("/home")}
					>
						Home
					</button>
				</>
			) : (
				<>
					<h3>
						Grand Total : Rs.
						{DataSet.map((e) => e.qty * e.price).reduce(
							(a, b) => a + b
						)}
					</h3>
					<div>* Inclusive of all taxes</div>
					<button
						type="submit"
						className="m-2 btn btn-outline-dark"
						onClick={() => history.push("/home")}
					>
						Home
					</button>
					<button
						type="submit"
						className="m-2 btn btn-success"
						onClick={handleOrder}
					>
						Place Order
					</button>
				</>
			)}
			{DataSet.map((e) => {
				return (
					<div className="container" key={e._id}>
						<div className="row">
							<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
								<h4>{e.name}</h4>
								<p>
									{e.qty} * {e.price} = Rs. {e.qty * e.price}
								</p>
								<button
									type="submit"
									className="btn btn-dark m-2"
									onClick={() => handleMinus(e._id)}
									disabled={e.qty <= 1}
								>
									-
								</button>
								<span>{e.qty}</span>
								<button
									type="submit"
									className="btn btn-dark m-2"
									onClick={() => handlePlus(e._id)}
								>
									+
								</button>
								<button
									type="submit"
									className="btn btn-light m-2"
									onClick={() => handleRemove(e._id)}
								>
									Remove
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cart;
