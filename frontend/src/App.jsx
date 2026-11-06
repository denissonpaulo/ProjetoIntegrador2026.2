import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Header title="Bem vindo!" />
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Projeto Integrador</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

         <h1 id='titulo'>JavaScript Externo</h1>

         <h2>Metodo document.getElementsById e Name</h2>
        Gato:
        <input name="animal" type="checkbox" value="Gato"/>
        Cachorro:
        <input name="animal" type="checkbox" value="Cachorro"/>
        Vermelho:
        <input name="cor" type="checkbox" value="Vermelho"/>
        Pássaro:
        <input name="animal" type="checkbox" value="Pássaro"/ >

        <p>Check the checkboxes that have a name="animal":</p>

        <p>This is a paragraph 2.</p>

        <p name="paragrafo">This is a paragraph 3.</p>
        <p name="paragrafo">This is a paragraph 4.</p>
        <p name="paragrafo">This is a paragraph 5.</p>



        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

       <div>
        <button onclick="acao1()">If/Else</button>
        <button onclick="acao2()">Switch</button>
        <button onclick="acao3()">For</button>
        <button onclick="acao4()">While</button>
        <button onclick="acao5()">Do_While</button>
        <button onclick="acao6()">Array</button>
        <button onclick="acao7()">ById/Name</button>
        <button onclick="acao8()">Função1</button>
        <button onclick="acao9()">Função2</button>
        <button onclick="acao10()">Sessão</button>
        <button onclick="acao11()">Obj Literal</button>
        <button onclick="acao12()">Obj Construtor</button>
        <button onclick="acao13()">Outro Construtor</button>
        <button onclick="acao14()">Banco</button>
        <section id="saida">
            <h2>Aqui vou registrar suas ações com os botões acima.</h2>
        </section>
    </div>

    <Header title="Volte Sempre!" />
     
    </>
  )
}

export default App
