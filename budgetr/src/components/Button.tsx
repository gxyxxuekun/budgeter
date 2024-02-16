
import Button from '@mui/material/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    backgrond-color: red
`

interface ButtonProps {
    text: string;
    outlined?: boolean;
    clickHandler?: () => void;

}
function CustomButton(props:ButtonProps) {
    const variantType = props.outlined ? "outlined" : "contained"
    return  <StyledButton
    onClick={props.clickHandler}
    variant={variantType}
    >
        {props.text}
        </StyledButton>
}

export default CustomButton
