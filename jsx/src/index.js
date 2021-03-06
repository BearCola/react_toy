import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const App = () => {
    const buttonText = { text: 'Click me' }
    const style = {
        backgroundColor: 'blue',
        color: 'white'
    }
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
      </label>
            <input id="name" type="text" />
            <button style={style}>{buttonText.text}</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
