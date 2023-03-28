import React from 'react';
import '../styles/creation.css';

function CreateBiddingItem() {
  return (
    <>
      <h1>Create Bidding Item</h1>
      <form
        action="https://your-lambda-endpoint.amazonaws.com/submit_bidding_item"
        method="post"
        encType="multipart/form-data"
      >
        <label htmlFor="part_name">Name of Part:</label>
        <input type="text" id="part_name" name="part_name" required /><br /><br />

        <label htmlFor="part_type">Type of Part:</label>
        <select id="part_type" name="part_type" required>
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
          required
        ></textarea>
        <br /><br />

        <label htmlFor="part_image">Image of Part:</label>
        <input
          type="file"
          id="part_image"
          name="part_image"
          accept="image/*"
          required
        /><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default CreateBiddingItem;
