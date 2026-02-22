import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponenets/Header';
import Footer from './MyComponenets/Footer'; 
import Todos from './MyComponenets/Todos'; 

import './App.css';

function App() {
  let x = 2;
  return (
    <>
    <Header/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;
