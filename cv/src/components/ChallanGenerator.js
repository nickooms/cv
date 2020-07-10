import React, { useEffect, useState } from 'react';

function ChallanGenerator() {
  const [speed, setSpeed] = useState(0);

  const updateSpeed = (value) => {
    setSpeed(value);
  };

  useEffect(() => {
    if (speed !== 0 && speed > 70) {
      // Make API call to /generate Challan
    } else {
      // Throw error 404, challan not found
    }
  }, [speed]); //once the speed is updated useEffect executes

  return (
    <div>
      <p>Challan Generator</p>
      <input
        type="number"
        value={speed}
        placeholder="miles per hour"
        onChange={(event) => updateSpeed(event.target.value)}
      />
    </div>
  );
}
export default ChallanGenerator;
