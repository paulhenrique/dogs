import React from 'react'
import { Route, Routes } from 'react-router';
import LoginForm from '../LoginForm';
import styles from './styles.module.scss';

function Login() {
  return (
    <div className={styles.Login}>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="criar" element={<LoginForm />}></Route>
        <Route path="perdeu" element={<LoginForm />}></Route>
        <Route path="resetar" element={<LoginForm />}></Route>
      </Routes>
    </div>
  )
}

export default Login
