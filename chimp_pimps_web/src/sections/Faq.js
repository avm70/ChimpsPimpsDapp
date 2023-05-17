import React from "react";
import styled from "styled-components";

const Section = styled.section`
margin-top: 8rem;
width: 90%;
color: ${props => props.theme.text};
align-items: center;
position: relative;
@media (max-width: 64em){
    margin-top: 5rem;
}
`

const Container = styled.div`
width: 75%;
min-height: 30vw;
margin: 0 auto;
margin-left: 20rem;
display: flex;
@media (max-width: 64em){
    margin-left: 0.7rem;
    width: 100%;
}
`
const Box = styled.div`
width: 50%;
height: 50%;
margin: 0 5rem;
@media (max-width: 64em){
    margin: 0rem;
}
`

const TextContainer = styled.div`
width: 90%;
justify-content: center;
align-items: center;
margin-left: 1rem;
background: 
linear-gradient(to left,
    #70007C 5%,
    #730086 10%,
    #6E007F 15%,
    #70007C 20%,
    #730086 25%,
    #6E007F 30%,
    #70007C 35%,
    #730086 40%,
    #6E007F 45%,
    #70007C 50%,
    #730086 55%,
    #6E007F 60%,
    #70007C 65%,
    #730086 70%,
    #6E007F 75%,
    #70007C 80%,
    #730086 85%,
    #6E007F 90%,
    #70007C 95%);
`
const Title = styled.h1`
text-align: center;
margin: 1rem 1rem 1rem 1rem;
text-transform: capitalize;
letter-spacing: 0em;
font-weight: bolder;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
background-color: black;

@media (max-width: 64em){
    font-size: ${props => props.theme.fontllg};
    margin: 0.3rem 0.3rem 0.3rem 0.3rem;
}
`


const Faq = () => {
    return (
        <Section id="faq">
            <Container>
                <Box>
                    <TextContainer>
                        <Title>Net</Title>
                        <Title>Token</Title>
                        <Title>Contract</Title>
                        <Title>Supply</Title>
                        <Title>Mint price</Title>
                    </TextContainer>
                </Box>
                <Box>
                    <TextContainer>
                        <Title>Ethereum</Title>
                        <Title>ERC-721</Title>
                        <Title>CC0</Title>
                        <Title>2420</Title>
                        <Title>5 free + 0.0042</Title>
                    </TextContainer>
                </Box>
            </Container>
        </Section>
    )
}

export default Faq;