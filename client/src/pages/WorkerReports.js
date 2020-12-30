import React from "react";
import { Container } from "reactstrap";
import CreateWorkerReport from "../components/CreateWorkerReport";

const WorkerReports = () => {

	return (
		<Container>
			<h2 className="text-center mt-4 mt-md-5 mb-5 mb-md-5">
            Cleaner Report
			</h2>
			<CreateWorkerReport />
		</Container>

	);
};

export default WorkerReports;