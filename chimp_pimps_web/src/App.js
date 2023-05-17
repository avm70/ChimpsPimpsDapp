import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/Themes';

import About from './sections/About';
import Faq from './sections/Faq';
import Hrend from './sections/components/Hrend';
import Minter from './sections/mintpage/Minter';

function App() {
  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={light}>
    <Homepage />
    </ThemeProvider>
    </>
  );
};

function Homepage () {
  return(
    <>
      <Minter id="minter"/>
      <About id="about"/>
      <Faq id="faq"/>
      <Hrend />
    </>
  );
}

export default App;
