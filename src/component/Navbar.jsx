import {  Button, Heading, HStack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
import Status from "./Status";

const Navbar = () => {
  const { auth, toggleAuth } = useContext(Authcontext);

  return (
    <div>
      <HStack spacing='14%' m={'20px'}>
        <Heading color={"orange.400"}>Navbar</Heading>
        <Text color={'green.400'} fontWeight={'600'} fontSize={'16px'}>Home</Text>
        <Text color={'green.400'} fontWeight={'600'} fontSize={'16px'}>About</Text>
        <Text color={'green.400'} fontWeight={'600'} fontSize={'16px'}>Profile</Text>
        <Text color={'green.400'} fontWeight={'600'} fontSize={'16px'}>Gallery</Text>

        <Button
          as="button"
          size='lg'
          borderRadius="md"
          color="white"
          m={'10px'}        
          colorScheme="blue"

          onClick={() => {
            toggleAuth()
            console.log(auth)
          }}
        >
          {!auth ? "Log-out" : "Log-in"}
        </Button>
      </HStack>
      <br />
      <Status />
    </div>
  );
};

export default Navbar;
