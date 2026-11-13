import {Link} from 'react-router-dom';

function Menu() {   
    return (
        
        <div id="botoes_menu">
            <button type="button" class="btn btn-info"><Link to="/">Home</Link></button>
            <button type="button" class="btn btn-secondary"><Link to="/cadastro">Acessar Cadastro</Link></button>
            <button type="button" class="btn btn-success"><Link to="/listas">Listas</Link></button>
            <button type="button" class="btn btn-danger"><Link to="/formulario">Formulário</Link></button>
            <button type="button" class="btn btn-warning"><Link to="/users">Usuários</Link></button>
            <button type="button" class="btn btn-primary"><Link to="/coletdados">Coleta de Dados</Link></button>
            <button type="button" class="btn btn-light"><Link to="/senhas">Senhas</Link></button>
            <button type="button" class="btn btn-dark"><Link to="/alarme">Alarme</Link></button>

        </div>
        
    )
}

export default Menu