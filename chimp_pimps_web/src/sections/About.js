import React from "react";
import styled from "styled-components";
import Carousel from "./components/Carousel";

const Section = styled.section`
width: 100vw;
margin-top: 18rem;
color: ${props => props.theme.text};
align-items: center;
position: relative;
@media (max-width: 64em){
    width: 90%;
    margin-top: 3rem;
}
`

const Container = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 64em){
    width: 90%;
    margin-left: 2rem;
}
`
const Box = styled.div`
width: 50%;
height: 100%;
justify-content: center;
align-items: center; 
`
const TextContainer = styled.div`
width: 95%;
justify-content: center;
align-items: center;
margin-left: 1.1rem;
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
    //margin: 0rem 0.5rem 0.5rem 0.5rem;
    margin: 0.3rem 0.3rem 0.3rem 0.3rem;
}
`

const About = () => {
    return (
        <Section id="about">
            <Container>
                <Box>
                    <Carousel></Carousel>
                </Box>
                <Box>
                    <TextContainer>
                        <Title>Chimps Pimps</Title>
                        <Title>NFT collection</Title>
                        <Title>2420 randomly generated</Title>
                        <Title>chimps with</Title>
                        <Title>150 hand drawn traits</Title>
                        <Title>10 legendaries</Title>
                    </TextContainer>
                </Box>
            </Container>
        </Section>
    )
}

export default About;