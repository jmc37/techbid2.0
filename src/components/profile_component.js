import React, { useState } from 'react';
import '../styles/profile.css';
import {Link} from "react-router-dom"

function ProfilePage() {
  const [showSaleItems, setShowSaleItems] = useState(false);
  const [showPurchasedItems, setShowPurchasedItems] = useState(false);

  const toggleSaleItems = () => {
    setShowSaleItems((prevState) => !prevState);
  };

  const togglePurchasedItems = () => {
    setShowPurchasedItems((prevState) => !prevState);
  };

  return (
    <div>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <section className="profile">
        <img src="https://media.licdn.com/dms/image/C5603AQEeZArXkjqhpw/profile-displayphoto-shrink_800_800/0/1663288386896?e=2147483647&v=beta&t=1v9RqaYwVZXM-5XzkbTJiJeCG2B8mJ9WS3f0Vn2whjc" alt="Profile Picture" />
        <h2>John Doe</h2>
        <ul>
          <li>
            <strong>Email:</strong> john.doe@example.com
          </li>
          <li>
            <strong>Password:</strong> ******
          </li>
          <li>
            <strong>Location:</strong> Vancouver, BC
          </li>
        </ul>
        <button
          id="sale-button"
          className={`expand-button ${showSaleItems ? 'expanded' : 'collapsed'}`}
          onClick={toggleSaleItems}
        >
          Items on Sale <span className="arrow"></span>
        </button>

        {showSaleItems && (
          <section className="sale-items">
            <h3>Sale Items</h3>
            <div className="item-card">
              <img src="https://via.placeholder.com/150x150" alt="Item Image" />
              <div className="item-details">
                <h4>Item 1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.
                </p>
                <div className="price">$29.99</div>
              </div>
            </div>
            <div className="item-card">
              <img src="https://via.placeholder.com/150x150" alt="Item Image" />
              <div className="item-details">
                <h4>Item 2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.
                </p>
                <div className="price">$49.99</div>
              </div>
            </div>
            <div className="item-card">
              <img src="https://via.placeholder.com/150x150" alt="Item Image" />
              <div className="item-details">
                <h4>Item 3</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.
                </p>
                <div className="price">$99.99</div>
              </div>
            </div>
          </section>
        )}

        <button
          id="purchased-button"
          className={`expand-button ${showPurchasedItems ? 'expanded' : 'collapsed'}`}
          onClick={togglePurchasedItems}
        >
          Items Purchased <span className="arrow"></span>
        </button>

        {showPurchasedItems && (
          <section className="purchased-items">
            <h3>Sale Items</h3>
            <div className="item-card">
              <img src="https://via.placeholder.com/150x150" alt="Item Image" />
              <div className="item-details">
                <h4>Item 1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.
                </p>
                <div className="price">$29.99</div>
              </div>
            </div>
            <div className="item-card">
              <img src="https://via.placeholder.com/150x150" alt="Item Image" />
              <div className="item-details">
                <h4>Item 2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.
                </p>
                <div className="price">$49.99</div>
              </div>
            </div>
            <div className="item-card">
              <img src="https://via.placeholder.com/150x150" alt="Item Image" />
              <div className="item-details">
                <h4>Item 3</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.
                </p>
                <div className="price">$99.99</div>
              </div>
            </div>
          </section>
        )}
</section>
    </div>
  );
}
export default ProfilePage;