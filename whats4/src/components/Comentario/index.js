import React from 'react';
import Styled from 'styled-components';
import Proptypes from 'prop-types'

const MainContainer = Styled.div`
    width:auto;
    height:auto;
    padding:10px;
    margin:15px;
    border-radius:5px;
    background-color:white;
    display:flex;
    flex-direction:column;

    align-items:flex-start;



    align-self:${props => {
        if(props.name === 'Eu'){
            return 'flex-end'
        } else {
            console.log(props.name)
            return 'flex-start'
        }
    }}
    }
`;

const NomeUsuario = Styled.p`
    
    font-weight:bold;
    margin-bottom:3px;
`;


const MensagemDoUsuario = Styled.p`

`;

function Comentario(props) {
    return (
        <MainContainer onDoubleClick={() =>{
            props.aoClicarDuasVezes(props.kay);
        }}>
            <NomeUsuario>{props.name}</NomeUsuario>
            <MensagemDoUsuario>{props.msg}</MensagemDoUsuario>
        </MainContainer>
    )}

Comentario.propTypes ={
    name: Proptypes.string.isRequired,
    msg:Proptypes.string.isRequired
} 

    export default Comentario

