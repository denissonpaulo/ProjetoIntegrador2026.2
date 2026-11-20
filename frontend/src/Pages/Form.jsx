import Menu from '../Menu'
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Form() {

  const [estados, setEstados] = useState([]);
  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => {
        setEstados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [campos, setCampos] = useState({
    nome: '',
    idade: '',
    uf: '',
    email: '',
    telefone: ''
  });

  function handleInputChange(event) {
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    axios.post('https://jubilant-barnacle-rwwpv4j55w6h59qw-3001.app.github.dev/cadastro', campos)
      .then((response) => {
        alert(response.data.dados.length + ' registros inseridos com sucesso!');
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  return (
    <>
      <Menu />
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label>
            Nome:
            <input type="text" name="nome" id="nome" onChange={handleInputChange} />
          </label><br />
          <label>
            Idade:
            <input type="number" name="idade" id="idade" onChange={handleInputChange} />
          </label><br />
          <label>
            UF:
            <select name="uf" id="uf" onChange={handleInputChange}>
              <option value="0">Escolha seu estado</option>
              {estados.map((estado) => (
                <option key={estado.id} value={estado.sigla}>{estado.nome}</option>
              ))}
            </select>
          </label>
        </fieldset>
        <fieldset>
          <legend>Dados de Contato</legend>
          <label>
            Email:
            <input type="text" name="email" id="email" onChange={handleInputChange}/>
          </label>
          <label>
            Telefone:
            <input type="text" name="telefone" id="telefone" onChange={handleInputChange} />
          </label>
        </fieldset><br />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default Form;