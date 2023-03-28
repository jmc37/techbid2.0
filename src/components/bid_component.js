import React from "react";
import "../styles/bid.css";
import {Link} from "react-router-dom"

function Bid() {
  return (
    <div>
      <header>
        <h1>Bid on Computer Part</h1>
      </header>
      <main>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <form>
          <img src="https://via.placeholder.com/150x150" alt="Item Image" />
          <label htmlFor="part-name">Part Name: Graphics Card</label>
          <label htmlFor="part-description">
            Part Description:Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam tristique et risus vel bibendum.
          </label>
          <label htmlFor="starting-bid">Enter your Bid:</label>
          <input type="number" id="starting-bid" name="starting-bid" required />
          <input
            type="submit"
            onClick={() => alert("Bid submitted")}
            value="Submit Bid"
          />
        </form>
        <span>Current Highest Bid: $29.99</span>
      </main>
    </div>
  );
}

export default Bid;
