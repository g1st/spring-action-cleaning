import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import SelectIcon from "../UI/SelectIcon";

const JobsTableBody = ({ data }) => {
	const history = useHistory();

	const formatDate = (dateISO) => {
		const date = new Date(dateISO);
		const options = {
			// weekday: "short",
			year: "numeric",
			month: "short",
			day: "numeric",
		};

		return date.toLocaleDateString("en-GB", options);
	};

	const handleClick = (id) => {
		history.push(`/edit-jobs/${id}`);
	};

	const handleKeyPress = (id, e) => {
		if (e.key === "Enter") {
			history.push(`/edit-jobs/${id}`);
		}
	};

	return (
		<tbody>
			{data.map(
				({
					id,
					customer,
					address,
					worker,
					visit_on,
					status,
					visit_time,
					visit_end,
					duration,
					start_time,
					end_time,
					actual_duration,
				}) => (
					<tr
						key={id}
						role="button"
						onClick={() => handleClick(id)}
						onKeyPress={(e) => handleKeyPress(id, e)}
						tabIndex={0}
					>
						<td className={"text-center"}>
							{status ? (
								<SelectIcon type="success" />
							) : (
								<SelectIcon type="warning" />
							)}
						</td>
						<td>{customer}</td>
						<td>{address}</td>
						<td>{worker}</td>
						<td>{formatDate(visit_on)}</td>
						<td>{visit_time}</td>
						<td>{visit_end}</td>
						<td>{duration}</td>
						<td>{start_time}</td>
						<td>{end_time}</td>
						<td>{actual_duration}</td>
					</tr>
				)
			)}
		</tbody>
	);
};

JobsTableBody.propTypes = {
	data: PropTypes.array,
};

export default JobsTableBody;
