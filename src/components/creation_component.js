import React, { useState } from 'react';
import '../styles/creation.css';
import { Storage, API } from 'aws-amplify';
import { createProduct } from '../graphql/mutations';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

function CreateBiddingItem() {
  const [partName, setPartName] = useState('');
  const [partType, setPartType] = useState('');
  const [partDescription, setPartDescription] = useState('');
  const [partImage, setPartImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Upload the image file to S3
    const imageFileName = `${Date.now()}-${partImage.name}`;
    const s3ImageKey = await Storage.put(imageFileName, partImage, {
      contentType: partImage.type,
      bucket: 'techbid2s3181152-staging', // Replace with your S3 bucket name
      level: 'public',
    });

    // Create a new product using the createProduct mutation
    const newProduct = await API.graphql({
      query: createProduct,
      variables: {
        input: {
          name: partName,
          description: partDescription,
          price: 0, // You can set the price to any value you want
          image: s3ImageKey.key,
        },
      },
    });

    console.log('New product created:', newProduct);
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
