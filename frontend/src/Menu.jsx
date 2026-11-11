function Menu() {   
    return (
        
        <div id="botoes_menu">
            <button type="button" class="btn btn-primary"><a class="bt" href="atividades.html">Atividades</a></button>
            <button type="button" class="btn btn-secondary"><a class="bt" href="backend/tabelas.html">Tabelas</a></button>
            <button type="button" class="btn btn-success"><a class="bt" href="backend/lista.html">Listas</a></button>
            <button type="button" class="btn btn-danger"><a class="bt" href="backend/formulario.html">Formulário</a></button>
            <button type="button" class="btn btn-warning"><a class="bt" href="backend/users.html">Usuários</a></button>
            <button type="button" class="btn btn-info"><a class="bt" href="backend/coletdados.html">Coleta de Dados</a></button>
            <button type="button" class="btn btn-light"><a href="backend/bd/senhas.html">Senhas</a></button>
            <button type="button" class="btn btn-dark"><a href="backend/alarm.html">Alarme</a></button>

        </div>
        
    )
}

export default Menu