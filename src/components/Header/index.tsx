import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';


function Header() {
  return (
    <div className={styles.Header}>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar conta</Link>
      </nav>
    </div>
  )
}

export default Header
