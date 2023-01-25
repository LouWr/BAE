import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const BurgerMenu = () => {
  return (
    <Flex display={["flex", "flex", "none", "none"]}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon boxSize={7} />}
          variant="outline"
        />
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Shifts</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
