import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownMenu,
	DropdownItem,
	DropdownToggle,
	List,
	NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LoginButton, LogoutButton } from "./auth";
import logo from "../assets/logo.png";
import Spinner from "./UI/Spinner";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { isLoading, isAuthenticated } = useAuth0();
	const history = useHistory();

	const toggle = () => setIsOpen(!isOpen);

	const handleLogoClick = () => {
		history.push("/");
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			<Navbar color="light" light expand="md" className="navbar">
				<NavbarBrand onClick={handleLogoClick}>
					<img src={logo} className="navbar_logo" alt="spring-action-logo" />
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto d-flex justify-content-end navItems" navbar>
						{isAuthenticated ? (
							<>
								<NavItem className="mr-md-5 pb-2 pt-2 pb-md-0 pt-md-0 text-center d-md-flex align-items-center">
									<NavLink
										tag={Link}
										className="text-primary link"
										to="/customers"
									>
										Clients{" "}
									</NavLink>
								</NavItem>
								<NavItem className="mr-md-5 pb-2 pt-2 pb-md-0 pt-md-0 text-center d-md-flex align-items-center">
									<NavLink
										tag={Link}
										className="link text-primary"
										to="/workers"
									>
										Cleaners{" "}
									</NavLink>
								</NavItem>
								<NavItem className="mr-md-5 pb-2 pt-2 pb-md-0 pt-md-0 text-center d-md-flex align-items-center">
									<NavLink tag={Link} className="link text-primary" to="/jobs">
										Jobs
									</NavLink>
								</NavItem>
								<NavItem className="mr-md-5 pb-2 pt-2 pb-md-0 pt-md-0 text-center d-md-flex align-items-center">
									<List type="unstyled">
										<UncontrolledDropdown nav inNavbar>
											<DropdownToggle
												nav
												caret
												className="text-primary link pb-2 pt-2"
											>
												Reports
											</DropdownToggle>
											<DropdownMenu right>
												<DropdownItem
													tag={Link}
													to="/workers_report"
													className="text-center link text-md-left pb-2 pt-2"
												>
													Cleaners
												</DropdownItem>
												<DropdownItem
													tag={Link}
													to="/customers_report"
													className=" text-center link text-md-left pb-2 pt-2"
												>
													Clients
												</DropdownItem>
											</DropdownMenu>
										</UncontrolledDropdown>
									</List>
								</NavItem>
								<NavItem className="mr-md-5 pb-2 pt-2 pb-md-0 pt-md-0 text-center d-md-flex align-items-center">
									<LogoutButton />
								</NavItem>
							</>
						) : (
							<LoginButton />
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
