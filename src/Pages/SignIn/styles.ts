import styled from 'styled-components'
import backgroundimage from '../../Assets/background.png'

export const Container = styled.div`

`
export const Logo = styled.div`
    background-image: url(${backgroundimage});    
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: bottom;

    height: 52vh;    
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5rem;

    h1{ 
        z-index: 1;
        font-size: 5rem;
        color: var(--text-title);
        font-weight: 700;
    }
`

export const DivSignIn = styled.div`


    .divSing{
        position: absolute;
        
        background: var(--background);
        border-radius: 3.5rem;
        top: 46vh;
        padding: 4rem 4rem 0rem 4rem;
        width: 100%;

        display: flex;
        grid-gap: 1rem;
        flex-wrap: wrap;
        flex-direction: column;
        
        a{
            display: flex;
            justify-content: flex-end;
        }

        span { 
            display: flex;
            justify-content: center;
            color: var(--text-body);
            grid-gap: 0.5rem;
        }

        #sing{
            display: flex;
            justify-content: space-between;

            img {
                height: 3rem;
            }
        }
    }
`

export const Opacity = styled.div`
    background: black;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    position: absolute;
`