import logo from './logo.svg';
import './App.css';
import {Component,  useState} from 'react'

function App() {

  const [state, setState] = useState({age:90})
  // event handle
  const handleClick =()=> {
    let newAge = state.age + 1;
      setState({age: newAge});

  }
    //return statement
    return(
      <div>
          <h1>Age is {state.age}</h1>
          <button onClick={handleClick}>Click Me!!!</button>

      </div>
    );

}

export default App;
 