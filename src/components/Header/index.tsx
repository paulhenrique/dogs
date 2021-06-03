import React from 'react'
import { Link } from 'react-router-dom';
// import styles from './styles.module.scss';
import { Container, Button, Flex, Spacer, Box } from "@chakra-ui/react"
import { ReactComponent as Dogs } from '../../assets/dogs.svg';

function Header() {
  return (
    <div>
      <nav className="container">
        <Container>
          <Box pt="5">
            <Flex align="center">
              <Box p="3"><Link className="logo" to="/"><Dogs aria-label="Dogs - Home" /></Link></Box>
              <Spacer />
              <Link to="/login">
                <Button>Login/Criar Conta</Button>
              </Link>
            </Flex>
          </Box>
        </Container>
      </nav>
    </div>
  )
}

export default Header;
