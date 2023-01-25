import { Container, Flex, Spacer } from "@chakra-ui/react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const NavBar = () => {
  return (
    <Container maxW={"100%"}>
      <Flex align="center">
        <h1>NavBar</h1>
        <Spacer h={"80px"} />
        <BurgerMenu />
      </Flex>
    </Container>
  );
};
