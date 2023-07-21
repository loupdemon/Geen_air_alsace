import React from 'react';
import './Table.css'; // Import du fichier CSS pour DataTable


const DataTable = ({ data }) => {
  return (
    <div className="data-table">
      <h2>Data Table</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Temperature (°C)</th>
              <th>Humidity (%)</th>
              <th>PM1.0</th>
              <th>PM2.5</th>
              <th>PM10</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.temperature}</td>
                <td>{entry.humidity}</td>
                <td>{entry.pm1_0}</td>
                <td>{entry.pm2_5}</td>
                <td>{entry.pm10}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
/////////////////////////////////////
// // DataTable.js
// import React from 'react';

// const DataTable = ({ data }) => {
//   return (
//     <div>
//       <h2>Data Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Temperature (°C)</th>
//             <th>Humidity (%)</th>
//             <th>PM1.0</th>
//             <th>PM2.5</th>
//             <th>PM10</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((entry, index) => (
//             <tr key={index}>
//               <td>{entry.temperature}</td>
//               <td>{entry.humidity}</td>
//               <td>{entry.pm1_0}</td>
//               <td>{entry.pm2_5}</td>
//               <td>{entry.pm10}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;
