import React from "react";
import styled from "styled-components";


const Btn = styled.button`
width: 80%;
display: inline-block;
background-color: ${props => props.theme.button};
color: ${props => props.theme.btntext};
font-weight: bolder;
outline: none;
border: none;
margin: 1rem 1rem 1rem 1rem;
font-family: "Bebas Neue";
font-size: ${props => props.theme.fontxl};
padding: 0.9rem 2.3rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
    color: ${props => props.theme.btntexton};
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

@media (max-width: 64em){
    font-size: ${props => props.theme.fontbm};
    padding: 0.3rem 1rem;
    margin: 0.3rem 0.3rem 0.3rem 0.3rem;
    width: auto;
    height: auto;
    border-radius: 5px;
}
`

const Button = ({text, link}) => {
    return (
        <Btn>
            <a href={link} aria-label={text} onClick={link}>
                {text}
            </a>
        </Btn>
    )
}

export default Button;
