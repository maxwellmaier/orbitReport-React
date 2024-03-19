// import React from 'react';
// import './styling.css'; // Import styling.css
// const Buttons = ({ filterByType, setSat, displaySats }) => {
//   return (
//     <div>
//       {displaySats.map((sat, id) => (
//         <button onClick={() => filterByType(sat)} key={id}>
//           {sat} Orbit
//         </button>
//       ))}
//       <button onClick={() => setSat(satData)}>All Orbits</button>
//     </div>
//   );
// };

// export default Buttons;


// Buttons.jsx
import React from 'react';
import satData from './satData'; // Import satData

const Buttons = ({ filterByType, setSat, displaySats }) => {
  const handleAllOrbitsClick = () => {
    setSat(satData); 
  };

  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      <button onClick={handleAllOrbitsClick}>All Orbits</button>
    </div>
  );
};

export default Buttons;
