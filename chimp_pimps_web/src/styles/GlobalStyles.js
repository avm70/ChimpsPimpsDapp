import { createGlobalStyle } from "styled-components";
import "@fontsource/palette-mosaic"
import "@fontsource/sora"
import "@fontsource/bebas-neue"

import backimg from '../assets/background.png'


const GlobalStyles = createGlobalStyle
`
*,*::before,*::after {
    margin: 0;
    padding: 0;
}

body {
    font-family: "Bebas Neue";
    overflow-x: hidden;
    background-image: url(${backimg});
    @media (max-width: 64em){
        background-size: cover;
    }
}

h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: none;
}
`
export default GlobalStyles;