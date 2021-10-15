import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`


export const InputDefault = styled.input`
    
    /* width: 100%;
    background: var(--background);
    border: none;
    border-bottom: 1px solid;
    color: var(--text-body);
    margin-top: -0.5rem; */

    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;

    &:focus ~ label{
        top: -20px;
        left: 0;
        color: #03e9f4;
        font-size: 12px;
    }
`

export const Label = styled.label`
    /* color: var(--text-body) */
    position: absolute;
    top:0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
`