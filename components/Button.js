import FontAwesome from "@expo/vector-icons/FontAwesome";
import styled from "styled-components";
import { html } from 'react-strict-dom';

const {
  button: Button,
  div: Div,
  p: P,
} = html

const MyButton = ({ children, theme,  onClick }) => (
  <ButtonContainer>
    <ButtonStyled onClick={onClick}>
      {theme === "primary" && (
        <FontAwesome name="picture-o" size={18} color="#25292e" style={{ paddingRight: 8 }} />
      )}
      <Text style={[{ color: "#25292e" }]}>{children}</Text>
    </ButtonStyled>
  </ButtonContainer>
)

const ButtonContainer = styled(Div)`
  width: 320px;
  height: 68px;
  margin: auto 20px;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-width: 4px;
  border-color: #ffd33d; 
  border-radius: 18px; 
`

const ButtonStyled = styled(Button)`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #fff;
`

const Text = styled(P)`
  color: #fff;
  font-size: 16px;
`

export default MyButton