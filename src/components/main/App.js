import './App.css';
import  MiLista from '../lista/MiLista';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';


function App(props) {

  
  return (
    <div className="App">
      <Header/>
        <h1>Mi aplicacion </h1>
        
        <div className="Parrafo">
          <p>Este es mi contenido de la app</p>
          <MiLista/>
        </div>
        
        <Footer/>
    </div>
  );
}

export default App;
