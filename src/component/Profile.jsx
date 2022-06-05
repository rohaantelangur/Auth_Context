import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../context/Authcontext";
import { Button } from "@chakra-ui/react";

export const Profile = () => {
  const { auth, setauth, token } = useContext(Authcontext);

  return (
    <>
      You Login Token is: {token}
      <br />
      <Button colorScheme="red" size="lg" onClick={() => setauth(false)}>
        LOGOUT
      </Button>
      {auth ? "" : <Navigate to="/" />}
    </>
  );
};
