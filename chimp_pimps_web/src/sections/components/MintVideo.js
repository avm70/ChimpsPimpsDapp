import React from "react";
import styled from "styled-components";
import GIF from '../../assets/unrevealgif.gif'


const VideoContainer = styled.div`
img {
    background: black;  
    border: 20px;
    border-style: none solid none solid;
    padding: 40px 20px 40px 20px;
    width: 100%;
    height: 30%;
    border-color: black #70007C black #70007C;
    @media (max-width: 64em){
        padding: 10px 5px 10px 5px;
        border: 5px;
        border-style: none solid none solid;
        border-color: black #70007C black #70007C;
    }
}
`

const MintVideo = () => {
    return (
        <VideoContainer>
            <img src={GIF} alt="unreveal_gif"/>
        </VideoContainer>
    )
}

export default MintVideo;