import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyleBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {myTheme} from "./styles/Theme.styled";


function App() {
    return (
        <div className="App">
            <Box>
                {/*<StyleBtn color="red" fontSize="20px">Hello</StyleBtn>*/}
                {/*<StyleBtn color="green">Hello</StyleBtn>*/}
                {/*<StyleBtn fontSize="30px">Hello</StyleBtn>*/}

                <StyleBtn color={myTheme.colors.primary} btnType={"primary"} active>Hello</StyleBtn>
                <StyleBtn color={myTheme.colors.secondary} btnType={"outlined"} >Hello</StyleBtn>

                {/*<input type="text"/>*/}
                {/*<input type="submit"/>*/}
                {/*<input type="checkbox"/>*/}
            </Box>
            <p>11</p>
        </div>
    );
}

export default App;

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  button {
    cursor: pointer;
  }
  
  ${Link} {
    cursor: zoom-in;
  }
  
  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`
