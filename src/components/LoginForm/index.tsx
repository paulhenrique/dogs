import React from 'react'
import styles from './styles.module.scss';
function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    <div className="container">
      <div className={styles.LoginForm}>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="label">Username</label>
          <input id="username" className="input" placeholder="Username" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
          <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <button type="submit" className="button">Entrar</button>
        </form>
      </div>

    </div>  )
}

export default LoginForm
