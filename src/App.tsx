import React, {useState} from 'react';
import './App.css';
import useApi from "./hook";

function App() {
  const [getMessage, message, errorMessage] = useApi();
  const [name, setName] = useState('Stephen');
  // @ts-ignore
  const handleChange = (e) => setName(e.target.value);
  return (
    <div className="App">
        <h1>Kubernetes Demo</h1>
        <h2>
            Name: <input type="text" value={name} onChange={handleChange} />
        </h2>
        <p>
            <h2>{message.message}</h2>
            <h2 style={{ color: "red" }}>{errorMessage}</h2>
        </p>
        <button onClick={() => getMessage(name)}>Submit Name</button>
    </div>
  );
}

export default App;
