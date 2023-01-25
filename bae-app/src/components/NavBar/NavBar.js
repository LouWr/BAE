import { Container, Flex, Spacer, Wrap, WrapItem } from "@chakra-ui/react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import logo from "../../assets/EcoPointsLogo.png";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Container
      maxW={"100%"}
      className="navContainer"
      // align="center"
      // minWidth="max-content"
      // align-items="center"
      // gap="2"
    >
      <Flex>
        <Spacer h={"20px"} />
        <img className="logo" src={logo} alt="" />
        <Wrap>
          <WrapItem>
            <Avatar gap="2" name="avatar" src="" />
          </WrapItem>
        </Wrap>
        <Spacer h={"20px"} />
        <BurgerMenu />
      </Flex>
    </Container>
  );
};

export default NavBar;
