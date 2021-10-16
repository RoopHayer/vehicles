import car from './images/car.png';
import './App.css';
import Footer from './Components/Footer';import Header from './Components/Header';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <header className="App-header">
        <img src={car} className="App-logo" alt="logo" />
        <p>
        Datsun 510
        </p>
        </header>
    </div>
    <Footer/>
    </>
  );
}

export default App;
