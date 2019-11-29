import React from 'react';
import Styled from 'styled-components';
import Proptypes from 'prop-types'
import Comentario from './components/Comentario/index'

const MainContainer = Styled.div`
	height: 100vh;
	width:600px;
	display: grid;
	grid-template:92vh 8vh/ 600px;
	justify-content:center;
	align-items: center;
	border:solid 1px black;
	background-color:lightcyan;
	text-align:center;
	margin:0 auto;
	padding: 0;
	box-sizing:border-box;
`;

const ListaComentarios = Styled.div`
	grid-row:1/2;
	grid-column:1/2;
	
	display:flex;
	flex-direction:column;
	justify-content:flex-end;
	padding:15px;
	min-height:100%;
	align-items:flex-start;
`;

const Formulario = Styled.div`
	grid-row:2/3;
	grid-column:1/2;

	display:grid;
	grid-template:5vh/125px 375px 100px;
`;

const InputNome = Styled.input`
	padding:5px 10px;
	border-radius:5px;
	border:none;
	margin:10px;
	margin-bottom:0;
`;

const BotaoEnviar = Styled.button`
	padding:5px 10px;
	border-radius:5px;
	border:none;
	margin:10px;
	margin-bottom:0;
`;







function App() {
  	return (
		<MainContainer>
			<ListaComentarios>
				<Comentario name="" msg=""></Comentario>
			</ListaComentarios>
			<Formulario>
				<InputNome value="STATE" placeholder="Usuário"></InputNome>
				<InputNome value="STATE" placeholder="Digite sua mensagem"></InputNome>
				<BotaoEnviar /* onCLick={} */ >Enviar</BotaoEnviar>
			</Formulario>
		</MainContainer>
  	);
}


export default App;
