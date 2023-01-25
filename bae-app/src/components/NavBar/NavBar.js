import { Container, Flex, Spacer } from "@chakra-ui/react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import logo from "../../EcoPointsLogo.png";
import "./NavBar.css";

export const NavBar = () => {
	return (
		<Container className="navContainer" maxW={"100%"}>
			<Flex align="center">
				<img className="logo" src={logo} alt="" />
				<Spacer h={"80px"} />
				<BurgerMenu />
			</Flex>
		</Container>
	);
};
