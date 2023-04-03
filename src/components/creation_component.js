import React, { useState } from 'react';
import '../styles/creation.css';
import { Storage, API, graphqlOperation,Amplify } from 'aws-amplify';
import { createProduct } from './graphql/mutations';
Amplify.configure(awsconfig);

function CreateBiddingItem() {

  const [partName, setPartName] = useState('');
  const [partType, setPartType] = useState('');
  const [partDescription, setPartDescription] = useState('');
  const [partImage, setPartImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { key } = await Storage.put(partImage.name, partImage);
    const imageUrl = `https://${process.env.techbid2s3181152-staging}.s3.amazonaws.com/public/${key}`;

    const product = {
      name: partName,
      description: partDescription,
      price: 100, // You can set the price as needed
      image: imageUrl
    };

    try {
      await API.graphql(graphqlOperation(createProduct, { input: product }));
      console.log('Product created successfully!');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <>
      <h1>Create Bidding Item</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="part_name">Name of Part:</label>
        <input
          type="text"
          id="part_name"
          name="part_name"
          value={partName}
          onChange={(e) => setPartName(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="part_type">Type of Part:</label>
        <select
          id="part_type"
          name="part_type"
          value={partType}
          onChange={(e) => setPartType(e.target.value)}
          required
        >
          <option value="">-- Select a type --</option>
          <option value="Graphics Card">Graphics Card</option>
          <option value="Ram">Ram</option>
          <option value="CPU">CPU</option>
          <option value="Power Supply">Power Supply</option>
          {/* Add more options as needed */}
        </select>
        <br />
        <br />

        <label htmlFor="part_description">Description of Part:</label>
        <br />
        <textarea
          id="part_description"
          name="part_description"
          rows="5"
          cols="40"
          value={partDescription}
          onChange={(e) => setPartDescription(e.target.value)}
          required
        ></textarea>
        <br />
        <br />

        <label htmlFor="part_image">Image of Part:</label>
        <input
          type="file"
          id="part_image"
          name="part_image"
          accept="image/*"
          onChange={(e) => setPartImage(e.target.files[0])}
          required
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default CreateBiddingItem;
