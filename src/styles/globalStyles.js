import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${variables.colors.gray};
    font-family: ${variables.fonts.jura}; 
    color: ${variables.colors.white};
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;