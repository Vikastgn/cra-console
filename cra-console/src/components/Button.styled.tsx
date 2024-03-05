import styled, {css} from "styled-components";
import {MyAnimations} from "../styles/animations/Animations";

type StyleBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: "primary" | "outlined"
    active?: boolean
}

export const StyleBtn = styled.button<StyleBtnPropsType>`
  border: none;
  //background-color: #fb3f78;
  background-color: ${props => props.color || "#fb3f78"};
  padding: 10px 20px;
  color: snow;
  //font-size: 2rem;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;

  ${props => props.btnType  === "outlined" && css<StyleBtnPropsType>`
    border: 2px solid ${props => props.color || "#fb3f78"};
    color: ${props => props.color || "#fb3f78"};
    background-color: transparent;
    
    &:hover {
      border-color: #370b67;
      color: #370b67;
      background-color: transparent;
    }
  `}
  
  ${props => props.btnType === "primary" && css<StyleBtnPropsType>`
    background-color: ${props => props.color || "#fb3f78"};
    color: snow;

    &:hover {
      background-color: #370b67;
    }
  `}
  ${props => props.active && css<StyleBtnPropsType>`
  box-shadow: 5px 5px 5px 5px rgba(37, 37, 44, 0.6);
  `}
`
