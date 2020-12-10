import React from "react";
import { Container } from "reactstrap";
import { JobsList } from "../components";

const Jobs = () => {
	return (
		<Container>
			<h2 className="text-center mt-4 mt-md-5 mb-5 mb-md-5">Jobs</h2>
			<JobsList />
		</Container>
	);
};

export default Jobs;
