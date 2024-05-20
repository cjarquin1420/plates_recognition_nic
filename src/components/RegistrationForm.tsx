import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [plateID, setPlateID] = useState<string>('');
  const [ownerName, setOwnerName] = useState<string>('');
  const [vehicleModel, setVehicleModel] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to submit form data to backend
    console.log('Form submitted:', plateID, ownerName, vehicleModel);
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Plate ID:</label>
          <input
            type="text"
            value={plateID}
            onChange={(e) => setPlateID(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Owner's Name:</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Vehicle Model:</label>
          <input
            type="text"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
