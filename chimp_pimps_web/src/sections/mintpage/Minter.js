import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

import MintVideo from "../components/MintVideo.js";
import Logo from '../components/Logo.js'

require('dotenv').config();

const key = process.env.REACT_APP_ALCHEMY_KEY;
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const alchemyKey = "https://eth-mainnet.g.alchemy.com/v2/" + key;
const contractABI = require("./ChimpsPimps.json");
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const sockweb3 = createAlchemyWeb3(`wss://eth-mainnet.g.alchemy.com/v2/` + key);
const contract = new web3.eth.Contract(contractABI, contractAddress);
const mintTopic = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
const zeroTopic = "0x0000000000000000000000000000000000000000000000000000000000000000";
const mintPrice = 4200000000000000;

const chimpsPimpsMintEvents = {
  address: contractAddress,
  topics: [mintTopic, zeroTopic]
};

const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

const totalSupply = async () => {
  try {
    let totalSupply = await contract.methods.totalSupply().call();
    return totalSupply;
  } catch(err) {
      console.log(err);
    return 0;
  }
};

const mintNFT = async(quantity) => {
  //error handling
  if (quantity === 0) { 
    return {
     success: false,
     status: "❗Please make sure all fields are completed before minting.",
     mintstatus: "Quantity equal zero.",
    }
  }

  var value = (mintPrice * quantity).toString(16);

  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: contract.methods.mintChimpPimp(quantity).encodeABI(),//make call to NFT smart contract 
    value: value,  
  };

  //sign the transaction via Metamask
  try {
  const txHash = await window.ethereum
    .request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });
  return {
    success: true,
    status: "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" + txHash
  }
  } catch (error) {
  return {
    success: false,
    status: "😥 Something went wrong: " + error.message
  }
  }
};

const wlMintNFT = async() => {

  const freeflag = await contract.methods.AreYouPimp(window.ethereum.selectedAddress).call();
  console.log(freeflag);
  var transactionParameters = {};
  if(!freeflag){
    transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: contract.methods.mintFreeChimp().encodeABI(),//make call to NFT smart contract
    };
  } else {
    return {
      success: false,
      status: "You are already pimp",
      mintstatus: "You are already pimp.",
     }
  }
  //sign the transaction via Metamask
  try {
  const txHash = await window.ethereum
    .request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });
  return {
    success: true,
    status: "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" + txHash
  }
  } catch (error) {
  return {
    success: false,
    status: "😥 Something went wrong: " + error.message
  }
  }
};


const Page = styled.div`
width:100%;
height: 800px;
@media (max-width: 64em){
    height:100%;
}
`

const TopSection = styled.section
`
width: 100vw;
position: relative;
z-index:999;
background-color: rgba(255, 0, 255, 0.4);
`
const MintSection = styled.section
`
width: 100vw;
position: relative;
margin-top: 6rem;
z-index:999;
@media (max-width: 64em){
  width: 90%;
  margin-top: 3rem;
}
`

const NavBar = styled.nav
`
display: flex;
justify-content: space-between;
align-items: center;
width: 75%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
@media (max-width: 64em){
  width: 100%;
  height: 2rem;
}
`

const MenuItem = styled.div`
align-self: flex-end;
margin: 0 1rem;
background-color: black;
height: 100%;
display: flex;
align-items: center;
@media (max-width: 64em){
    margin: 0 0.2rem;
}
`

const ButtonBackground = styled.div`
display: flex;
margin: 0 1rem;
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
height:100%;
align-items: center;
@media (max-width: 64em){
    margin: 0.2rem;
}
`

const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [minted, setMinted] = useState("");
  const [mintStatus, setMintStatus] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { address, status } = await getCurrentWalletConnected();

      setWallet(address);
      setStatus(status);

      addWalletListener();
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const minted = await totalSupply();
      setMinted(minted);
      addContractListener();  
    }
    fetchData();
  }, []);

  function addContractListener() {
    if (sockweb3) {
      sockweb3.eth.subscribe("logs", chimpsPimpsMintEvents).on("data", gettingData);
    }
  };

  const gettingData = async(txn) => {
    console.log(txn);
    const minted = await totalSupply();
    setMinted(minted);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { success, status, mintstatus } = await mintNFT(quantity);
    setMintStatus(mintstatus);
    if (success) {
    }
  };

  const onWlMintPressed = async() => {
    const { success, status, mintstatus } = await wlMintNFT(quantity);
    setMintStatus(mintstatus);
    if (success) {
    }
  };

  var quantity = 0;

  function increaseQuantity() { 
    quantity++;
    document.getElementById("toMint").innerHTML = quantity;
  }

  function decreaseQuantity() {
    if(quantity > 0) { 
      quantity--;
      document.getElementById("toMint").innerHTML = quantity;
    }
  }

const Btn = styled.button`
display: inline-block;
background-color: ${props => props.theme.button};
color: ${props => props.theme.btntext};
font-weight: bolder;
outline: none;
border: none;
margin: 0 1rem;
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
    font-size: ${props => props.theme.fontllg};
    padding: 0.3rem 1rem;
    margin: 0.3rem 0.3rem 0.3rem 0.3rem;
    width: auto;
    height: auto;
    border-radius: 5px;
}
`
const Container = styled.div`
width: 80%;
margin-left: 15rem;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 64em){
    width: 90%;
    margin: 1rem 0 0 3rem; 
}
`
const Box = styled.div`
width: 50%;
height: 100%;
@media (max-width: 64em){
    width: 100%;
    height: 100%;
    margin-right: 1rem;
}   
`
const Box1 = styled.div`
margin-left: 15rem;
width: 50%;
height: 100%;
@media (max-width: 64em){
    margin-left: 2rem;
}  
`
const TextContainer = styled.div`
width: 80%;
height: 80%;
justify-content: center;
align-items: center;
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
margin: 1rem 1rem;
text-transform: capitalize;
letter-spacing: 0em;
font-weight: bolder;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
background-color: black;
@media (max-width: 64em){
    font-size: ${props => props.theme.fontllg};
    margin: 0rem 0.5rem 0.5rem 0.5rem;
}
`

const SubTitle = styled.h2`
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
    margin: 0rem 0.5rem 0.5rem 0.5rem;
}
`
const ButtonContainer = styled.div`
width: 80%;
height: 80%;
margin: 1rem 0 0 0;
justify-content: center;
align-items: center;
display: flex;
@media (max-width: 64em){
    margin: 0.1rem 0 0 0;
}
`

const BtnMint = styled.button`
display: inline-block;
background-color: ${props => props.theme.button};
color: ${props => props.theme.btntext};
font-weight: bolder;
outline: none;
border: none;
margin: 1rem;
font-family: "Bebas Neue";
font-size: ${props => props.theme.fontxxl};
padding: 1rem 2.3rem;
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
    font-size: ${props => props.theme.fontllg};
    padding: 0.3rem 1rem;
    margin: 0.3rem 0.3rem 0.3rem 0.3rem;
    width: auto;
    height: auto;
    border-radius: 5px;
}
`
const Brdr = styled.hr`
position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: 0;
height: ${props => props.theme.navHeight};
background-color: rgba(255, 0, 255, 0.4);
@media (max-width: 64em){
  width: 100%;
  height: 2rem;
}
`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
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
height:100%;
align-items: center;
list-style: none;
font-size: ${props => props.theme.fontnav};
@media (max-width: 64em){
    font-size: ${props => props.theme.fontllg};
}
`


const MenuItem = styled.div`
margin: 0 1rem;
background-color: black;
height: 100%;
display: flex;
align-items: center;
@media (max-width: 64em){
    margin: 0.2rem;
}
`

const MenuText = styled.li`
margin: 0 1rem;
text-transform: capitalize;
letter-spacing: 0em;
font-weight: bolder;
color: ${props => props.theme.text};
cursor: pointer;
&:hover{
    transform: scale(1.1);
    color: ${props => props.theme.btntexton};
}
@media (max-width: 64em){
    margin: 0.2rem;
}
`
const scrollTo = (id) => {
  let element = document.getElementById(id);
  element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
  })
}
  return (
    <Page>
    <TopSection>
      <NavBar>
          <Logo />
          <Menu>
            <MenuItem><MenuText><a href="https://twitter.com/chimpspimps" target="_blank" rel="noreferrer">Twitter</a></MenuText></MenuItem>
            <MenuItem><MenuText><a href="https://opensea.io/collection/chimppimps" target="_blank" rel="noreferrer">Opensea</a></MenuText></MenuItem>
            <MenuItem onClick={() => scrollTo('about')}><MenuText>About</MenuText></MenuItem>
            <MenuItem onClick={() => scrollTo('faq')}><MenuText>Faq</MenuText></MenuItem>
          </Menu>
          <ButtonBackground>
              <MenuItem>
              <Btn id="walletButton" onClick={connectWalletPressed}>
                  {walletAddress.length > 0 ? (
                  "Connected: " +
                  String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)
                  ) : (
                  <span>Connect Wallet</span>
                  )}
              </Btn>
              </MenuItem>
          </ButtonBackground>
      </NavBar>
    </TopSection>
    <MintSection>
      <Container>
        <Box>
          <MintVideo />
        </Box>
        <Box1>
          <TextContainer>
          <Title>Total supply 2420</Title>
          </TextContainer>
          <TextContainer>
          <Title>5 for free</Title>
          </TextContainer>
          <TextContainer>
          <Title>next 0.0042</Title>
          </TextContainer>
          <TextContainer>
          <Title id="minted">Minted {minted}</Title>
          </TextContainer>
          <ButtonContainer>
            <ButtonBackground>
              <MenuItem>
                <BtnMint onClick={decreaseQuantity}>-</BtnMint>
                <BtnMint id="toMint">{quantity}</BtnMint>            
                <BtnMint onClick={increaseQuantity}>+</BtnMint>
              </MenuItem>
            </ButtonBackground>
          </ButtonContainer>
          <ButtonContainer>
            <ButtonBackground>
              <MenuItem>
                <BtnMint onClick={onWlMintPressed}>FREE MINT</BtnMint>            
                <BtnMint onClick={onMintPressed}>MINT</BtnMint>
              </MenuItem>
            </ButtonBackground>
          </ButtonContainer>
          <TextContainer>
          <Title>{mintStatus}</Title>
          </TextContainer>
        </Box1>
      </Container>
    </MintSection>
    </Page>
  );
};

export default Minter;
