import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Label, FormText } from "reactstrap";
import { getWorkers, getWorker } from "../../service";
import Modal from "./Modal";

const SelectWorker = ({ state, setState, error }) => {
	const [modal, setModal] = useState(false);
	const [data, setData] = useState(null);
	const toggle = () => setModal(!modal);

	const fetchWorkers = () => {
		getWorkers()
			.then((res) => {
				setData({
					name: "workers",
					data: res.workers,
					fetchFunction: fetchWorker,
				});
			})
			.catch((e) => console.log(e));
	};

	const fetchWorker = (id) => {
		getWorker(id)
			.then((res) => {
				const data = res.rows[0];
				setState({
					...state,
					worker: data.worker_name,
					worker_id: id,
					visit_time: data.visit_time ?? null,
					duration: data.duration ?? null,
				});
			})
			.catch((e) => console.log(e));
	};

	const handleSelectWorkers = () => {
		toggle();
		fetchWorkers();
	};

	return (
		<div className="mb-3 mb-md-4 mb-lg-5">
			<FormGroup>
				<Label for="worker" size="lg">
					Cleaner
				</Label>
				<Button
					outline
					color="primary"
					block
					onClick={handleSelectWorkers}
					size="lg"
				>
					{state.worker || "Select cleaner"}
				</Button>
				{error && <FormText color="danger">{error}</FormText>}
			</FormGroup>
			<Modal isOpen={modal} toggle={toggle} data={data} />
		</div>
	);
};

SelectWorker.propTypes = {
	state: PropTypes.object.isRequired,
	setState: PropTypes.func.isRequired,
	error: PropTypes.string,
};

export default SelectWorker;