import Menu from '../Menu'
import {Link} from 'react-router-dom';

function Form() {
  return (
    <>
      <Menu />
      <div>Hello World</div>
      <Link to="/">Voltar para Home</Link>
      
    </>
  )
}

export default Form;