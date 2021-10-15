import { BrowserRouter } from "react-router-dom";
// import { SignIn } from "./Pages/SignIn";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    
    <BrowserRouter>
      
      <Routes />    
      <GlobalStyle />
    </BrowserRouter>
  );
}
