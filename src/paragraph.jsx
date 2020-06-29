import React, { useEffect } from 'react'; // Import the useEffect

function Parag(props) {
  useEffect(() => {
    // Returned Functionality that handles CleanUp
    return () => console.log('It has unmounted')
  })
  return (
    <div>
      <p style={{fontFamily:"Courier", fontSize: "larger"}}>
        Keep Clicking Keep Clicking Keep Clicking Keep Clicking You have {props.count} clicks
      </p>
    </div>
  )
}

export default Parag;
