import React from 'react'
import { Route, Routes } from 'react-router';
import LoginCreate from '../LoginCreate';
import LoginForm from '../LoginForm';
import LoginPasswordLost from '../LoginPasswordLost';
import LoginPasswordReset from '../LoginPasswordReset';
import {Container} from "@chakra-ui/react";

function Login() {
  return (
    <Container pt="5">
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/criar" element={<LoginCreate />}></Route>
        <Route path="perdeu" element={<LoginPasswordLost />}></Route>
        <Route path="resetar" element={<LoginPasswordReset />}></Route>
      </Routes>
    </Container>
  )
}

export default Login;
