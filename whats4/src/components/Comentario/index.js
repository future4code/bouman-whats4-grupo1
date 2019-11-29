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
    text-align:left;
`;

const NomeUsuario = Styled.p`
    
    font-weight:bold;
    margin-bottom:3px;
`;


const MensagemDoUsuario = Styled.p`

`;

function Comentario() {
    return (
        <MainContainer>
            <NomeUsuario></NomeUsuario>
            <MensagemDoUsuario></MensagemDoUsuario>
        </MainContainer>
    )}

    export default Comentario