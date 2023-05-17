import React from "react";
import styled from "styled-components";

const Brdr = styled.hr`
margin-top: 2rem;
width: 100vw;
height: ${props => props.theme.navHeight};
background-color: rgba(255, 0, 255, 0.4);
@media (max-width: 64em){
    margin-top: 7rem;
    height: 2rem;
}
`

const Hrend = () => {
    return(
        <Brdr />
    )
}

export default Hrend;