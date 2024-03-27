import logo from './logo.svg';
import './App.css';
import { Bitrix24Form } from 'react-bitrix24-form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Bitrix24Form src='https://cdn.bitrix24.com/b16700425/crm/form/loader_55.js' data="inline/55/e23xlv" />
      </header>
    </div>
  );
}

export default App;
