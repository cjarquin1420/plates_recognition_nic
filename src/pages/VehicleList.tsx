import React from 'react';

// Dummy data
const vehicleData = [
  { plateID: 'ABC123', ownerName: 'John Doe', vehicleModel: 'Toyota Corolla' },
  { plateID: 'XYZ456', ownerName: 'Jane Smith', vehicleModel: 'Honda Civic' },
  { plateID: 'LMN789', ownerName: 'Alice Johnson', vehicleModel: 'Ford Focus' },
];

const VehicleList: React.FC = () => {
  return (
    <div className="vehicle-list-container">
      <h2>Registered Vehicles</h2>
      <table className="vehicle-list-table">
        <thead>
          <tr>
            <th>Plate ID</th>
            <th>Owner's Name</th>
            <th>Vehicle Model</th>
          </tr>
        </thead>
        <tbody>
          {vehicleData.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.plateID}</td>
              <td>{vehicle.ownerName}</td>
              <td>{vehicle.vehicleModel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
