import { Container, InputDefault, Label } from "./styles";

interface InputProps{
    id: string,
    label: string,
}

export function Input(props: InputProps) {
    return (
        <Container>
            <InputDefault id={props.id} type="text"/>

            <Label htmlFor={props.id}>{props.label}</Label>
        </Container>
    )
}