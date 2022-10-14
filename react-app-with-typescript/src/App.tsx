import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // TypeScript is preventing from mixup types, but can be override like this
  const [number, setNumber] = React.useState<number | string>(5)

  const changeNumber = () => {
    setNumber("2")
  }

  return (
    <div className="App">

      <header className='App-header'>
        <h1>{number}</h1>
        <button onClick={changeNumber}>Change number</button>
      </header>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
