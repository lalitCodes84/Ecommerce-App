import { Box, Flex, Link, HStack, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import Logo from "./Logo"

function Navbar({marginBottom}) {
  return (
    <div>
      <HStack 
      marginBottom={marginBottom}
        border="1px solid black"
        backgroundColor="#006064"
        color="whitesmoke"
        display="flex"
        justifyContent="space-between"
      >
        {/* Left Menu Section Of Navbar */}
        <Flex gap={10} padding={4} alignItems={"center"}>
         
           <Logo/>
         
          <Box>
            <Link as={RouterLink} to="/">
              Home
            </Link>
          </Box>
          <Box>
            <Link as={RouterLink} to="/about">
              About
            </Link>
          </Box>
          <Box>
            <Link as={RouterLink} to="/contact">
              Contact Us
            </Link>
          </Box>
        </Flex>

        {/* Right Menu Section Of Navbar */}

        <Flex gap={10} padding={4}>
          <Box margin="0px 20px">
            <Link as={RouterLink} to="/cart">
              <Image src=".\public\ecommerce_2415292.png" alt="" width="30px" />
            </Link>
          </Box>
          <Box>
            <Link as={RouterLink} to="/login">
              Login
            </Link>
          </Box>
          <Box>
            <Link as={RouterLink} to="/signup">
              Sign Up
            </Link>
          </Box>
        </Flex>
      </HStack>
    </div>
  );
}

export default Navbar;
