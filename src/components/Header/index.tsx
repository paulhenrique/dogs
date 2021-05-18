import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';

function Header() {
  return (
    <div className={styles.Header}>
      <nav className="container">
        <Link className="logo" to="/"><Dogs aria-label="Dogs - Home" /></Link>
        <Link className={styles.login} to="/login">Login / Criar conta</Link>
      </nav>
    </div>
  )
}

export default Header;
