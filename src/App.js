import car from './images/car.png';
import './App.css';
import Footer from './Components/Footer';
function App() {
  return (
    <>
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