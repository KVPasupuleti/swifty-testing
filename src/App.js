import logo from './logo.svg';
import './App.css';

import { loadSwifty, SWIFTY_JS_SCRIPT_ID } from './swiftyUtils'

window.addEventListener('load', () => {
  setTimeout(() => {
    if (!document.getElementById(SWIFTY_JS_SCRIPT_ID)) {
      loadSwifty()
    }
  }, 3000)
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Loaded Swifty Dynamically and it is not working</h4>
        <p>I have added the script provided by HelpJuice inside `swiftyScript.txt` for reference. Please check that</p>
        <a href="https://github.com/KVPasupuleti/swifty-testing" target="_blank">Github Link</a>
      </header>
    </div>
  );
}

export default App;
