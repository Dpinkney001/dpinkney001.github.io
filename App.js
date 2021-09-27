import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="Car Picture.jpg" className="App-logo" alt="logo" />  
        <p>
          My name is Duvall Pinkney and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/Dpinkney001"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github 
        </a>
      </header>
    </div>
  );
}

export default App;
