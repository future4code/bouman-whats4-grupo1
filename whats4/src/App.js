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







class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			inputUsuario : "",
			inputMensagem: "",
			arrListaMensagem:[],
			
		}  
		
	}

	/* funções */
	controleUsuario = e => {
		this.setState({
		  inputUsuario: e.target.value
		});
	  };

	controleMensagem = e => {
	this.setState({
		inputMensagem: e.target.value
	});
	};

	addMensagem = () =>{
		const novaMensagem = {nomeUsuario: this.state.inputUsuario, mensagem: this.state.inputMensagem};
		const arrListaMensagemCopy = [...this.state.arrListaMensagem, novaMensagem];



		this.setState({
			arrListaMensagem: arrListaMensagemCopy, // 
			inputMensagem:"",
		});



	}

	apertarEnter = e =>{
		if (e.keyCode === 13){
			this.addMensagem()
		}
	}

	apagarMensagem = argument =>{
	
		if (window.confirm('Tem certeza que deseja deletar essa mensagem?')){
		
			for (const msg of this.state.arrListaMensagem){
				
				if (this.state.arrListaMensagem.indexOf(msg)=== argument){
					
					const arrListaMensagemCopy = [...this.state.arrListaMensagem]
					const index = this.state.arrListaMensagem.indexOf(msg)
					
					arrListaMensagemCopy.splice(index,1)
					
					this.setState({
						arrListaMensagem:arrListaMensagemCopy
					})
					

				}
			}	
		
		}
	}
	/* render */


	render(){
		return (
			<MainContainer>
				<ListaComentarios>
					{/* inserindo dados */}

					{this.state.arrListaMensagem.map(element =>{
						return (
							<Comentario aoClicarDuasVezes={this.apagarMensagem} kay={this.state.arrListaMensagem.indexOf(element)} name={element.nomeUsuario} msg={element.mensagem}/>
						)
					})

					}

					
				</ListaComentarios>
				<Formulario>
					<InputNome value={this.state.inputUsuario} onChange={this.controleUsuario} placeholder="Usuário"></InputNome>
					<InputNome onKeyDown={this.apertarEnter} value={this.state.inputMensagem} onChange={this.controleMensagem} placeholder="Digite sua mensagem"></InputNome>
					<BotaoEnviar  onClick={this.addMensagem} >Enviar</BotaoEnviar>
				</Formulario>
			</MainContainer>
		);
	}
}

InputNome.propTypes = {
	value: Proptypes.string.isRequired
}




export default App;
