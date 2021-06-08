
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Particles from "react-particles-js";
function App() {
  return (
  <> 
      <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value:30 , 
            density: {
              enable: true,
              value_area: 900
            }
          }, shape:{
            type:"circle",
            stroke: {
              width: 6,
              color:"#0b3468"
            }
          }
        }
      }}
      
      
      />
      <Navbar /> 
      <Header />
      
  </>
);
}

export default App;
