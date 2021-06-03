import React from 'react'
import { FormControl, FormLabel, Input, Button, Heading} from "@chakra-ui/react";
function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert("Olá mundo");
    e.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(r => r.json()).then(console.log);
  }
  return (
    <div>
      <Heading>Entrar</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mt="5">
          <FormLabel for="username">Username</FormLabel>
          <Input id="username" placeholder="Username" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
        </FormControl>

        <FormControl mt="5">
          <FormLabel for="password">Password</FormLabel>
          <Input
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />
        </FormControl>
        <Button type="submit" isFullWidth mt="5">Entrar</Button>
      </form>
    </div>
  )
}

export default LoginForm
