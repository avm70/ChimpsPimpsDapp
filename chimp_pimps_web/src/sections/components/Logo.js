import React from "react";
import styled from 'styled-components'

import Img from '../../assets/logo.png'

const Logobackground = styled.div
`
border: 1rem;
border-style: none solid none solid;
border-color: #70007C;
display: flex;
background: black;
height:100%;
align-items: center;
@media (max-width: 64em){
    margin: 0.2rem;
    border: 0.2rem;
    border-style: none solid none solid;
    border-color: #70007C;
}
`

const LogoImg = styled.img
`
margin: 1rem;
height: 90%;
cursor: pointer;
transition: all 0.2s ease;
&:hover{
    transform : scale(1.1);
}
@media (max-width: 64em){
    margin: 0.2rem;
}
`


const Logo = () => {
    return (
        <Logobackground>
            <LogoImg src={Img} alt="nft"/>
        </Logobackground>
    )
}

export default Logo;