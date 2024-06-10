import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Internal Tools</Box>
        <Flex alignItems={"center"}>
          <RouterLink to="/">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>
              Home
            </Link>
          </RouterLink>
          <RouterLink to="/use-case-1">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>
              Use Case 1
            </Link>
          </RouterLink>
          <RouterLink to="/use-case-2">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>
              Use Case 2
            </Link>
          </RouterLink>
          <RouterLink to="/use-case-3">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>
              Use Case 3
            </Link>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;