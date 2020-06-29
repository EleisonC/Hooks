import React, { useState, useEffect } from 'react'; // Import the useEffect
import Parag from './paragraph'; // Import Parag
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  // Creating a state variable called count
  const [count, setCount] = useState(0);
  const [toggleDisplay, setDisplay] = useState(true) // Manage Mounting and Unmount for Parag

  // Adding a side effect using the effect Hook
  // Similar to componentDidMount & ComponentDidUpdate
  useEffect(() => {
    document.title = `You Have ${count} Clicks`
  });

  return (
    <div className="App" 
      style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        {/* This component will mount(toggleDisplay: true) when the 
            Parag-Display button is clicked and 
            unmount(toggleDisplay: false) when the button clicked */}
        { toggleDisplay ?
          <Parag count={count}/> : null
        }
        <h1>{count}</h1>
        <Button size="large" variant="outlined" onClick={() => setCount(count + 1)} 
          style={{fontFamily:"Courier", fontSize: "larger"}}>
          CHANGE
        </Button>
        <Button size="large" variant="outlined" onClick={() => setDisplay(!toggleDisplay)}
          style={{fontFamily:"Courier", fontSize: "larger", marginLeft: "10px"}}>
            Parag-Display
        </Button>
      </div>
    </div>
  );
}
export default App;
