import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'
import Header from '../Header'
import Menu from '../Menu'
import {Link} from 'react-router-dom';

function App() {
  const [contador, setContador] = useState(0);
  function increment() {
    setContador(contador + 1);
  }
  return (
    <>
      <section id="center">
        <Menu />

        <Header title="Bem vindo!" />
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <p><input type="button" value="Clique" onClick={increment} /></p>
        <p>{contador}</p> Cliques!

        <div>
          <h1>Projeto Integrador</h1>
        </div>
        <Link to="/cadastro">Acessar cadastro</Link>
    </section>
    </>
  )
}

export default App;
