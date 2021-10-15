//React
import { Link } from 'react-router-dom';

//Components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

//Styles
import { Container, DivSignIn, Logo, Opacity } from './styles';

//Images
import facebookImg from '../../Assets/facebook.svg'
import googleImg from '../../Assets/google.svg'
import discordImg from '../../Assets/discord.svg'
import twitchImg from '../../Assets/twitch.svg'


export function SignIn() {
    return (
        <Container>
            <Logo>
                <Opacity>                
                </Opacity>
                <h1>Rpg Project</h1>
            </Logo>
            <DivSignIn>
                <div className='divSing'>
                    <Input id='Email' label='Email'/>
                    <Input id='Password' label='Password'/>
                    
                    <Link to='#'>Forgot Password?</Link>

                    <Button />

                    <span>Don't have account? <Link to='#'>Sign Up</Link></span>
                    
                    <div id="sing">
                        <img src={facebookImg} alt='Sign In with Facebook'></img>
                        <img src={googleImg} alt='Sign In with Google'></img>
                        <img src={discordImg} alt='Sign In with Discord'></img>
                        <img src={twitchImg} alt='Sign In with Twitch'></img>
                    </div>

                </div>
            </DivSignIn>
        </Container>
    )
}