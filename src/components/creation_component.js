import React, { useState } from 'react';
import '../styles/creation.css';
import { Storage } from "@aws-amplify/storage"



function CreateBiddingItem() {
  const [partName, setPartName] = useState('');
  const [partType, setPartType] = useState('');
  const [partDescription, setPartDescription] = useState('');
  const [partImage, setPartImage] = useState('');

  const handlePartNameChange = (event) => {
    setPartName(event.target.value);
  };

  const handlePartTypeChange = (event) => {
    setPartType(event.target.value);
  };

  const handlePartDescriptionChange = (event) => {
    setPartDescription(event.target.value);
  };

  const handlePartImageChange = (event) => {
    setPartImage(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Upload the image to S3
    const imageKey = await Storage.put(partImage.name, partImage);

    // Prepare the data to send to RDS
    const partData = {
      partName,
      partType,
      partDescription,
      partImage: `https://techbid2-s3181152-staging.s3-us-west-2.amazonaws.com/public/${imageKey.key}`
    };

    // Send the data to your RDS
    const response = await fetch('https://your-api-endpoint.execute-api.us-west-2.amazonaws.com/dev/submit-bidding-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(partData)
    });

    if (response.ok) {
      console.log('Data successfully sent to RDS!');
    } else {
      console.log('There was an error sending data to RDS.');
    }
  };
  return (
    <>
      <h1>Create Bidding Item</h1>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <label htmlFor="part_name">Name of Part:</label>
        <input type="text" id="part_name" name="part_name" value={partName} onChange={handlePartNameChange} required /><br /><br />

        <label htmlFor="part_type">Type of Part:</label>
        <select id="part_type" name="part_type" value={partType} onChange={handlePartTypeChange} required>
          <option value="">-- Select a type --</option>
          <option value="Graphics Card">Graphics Card</option>
          <option value="Ram">Ram</option>
          <option value="CPU">CPU</option>
          <option value="Power Supply">Power Supply</option>
          {/* Add more options as needed */}
        </select><br /><br />

        <label htmlFor="part_description">Description of Part:</label><br />
        <textarea
          id="part_description"
          name="part_description"
          rows="5"
          cols="40"
          value={partDescription}
          onChange={handlePartDescriptionChange}
          required
        ></textarea>
        <br /><br />

        <label htmlFor="part_image">Image of Part:</label>
        <input type="file" id="part_image" name="part_image" onChange={handlePartImageChange} required /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default CreateBiddingItem;
