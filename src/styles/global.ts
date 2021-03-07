import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

body{
  font-family: -app-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
}

`
export default GlobalStyles
