import React from 'react';
import '../styles/index.css'
import {Link} from "react-router-dom"


function NavBar(signOut) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Homes</Link></li>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/profile">Profile</Link></li>

      </ul>
    </nav>
  );
}

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to Tech Hub</h1>
        <h2>Find, Bid, Sell</h2>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="search-container">
      <form className="search-box">
        <label htmlFor="search"><i className="fa fa-search"></i></label>
        <input type="text" id="search" name="search" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

function SaleItems() {
  return (
    <section className="sale-items">
      <h3>Sale Items</h3>
      <div className="item-card" onClick={<Link to="/profile">Profile</Link>}>
        <img src="https://via.placeholder.com/150x150" alt="Item Image" />
        <div className="item-details">
          <h4>Item 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.</p>
          <div className="price">$29.99</div>
        </div>
      </div>
      <div className="item-card">
        <img src="https://via.placeholder.com/150x150" alt="Item Image" />
        <div className="item-details">
          <h4>Item 2</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.</p>
          <div className="price">$49.99</div>
        </div>
      </div>
      <div className="item-card">
        <img src="https://via.placeholder.com/150x150" alt="Item Image" />
        <div className="item-details">
          <h4>Item 3</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.</p>
          <div className="price">$99.99</div>
        </div>
      </div>
    </section>
  );
}

function SuggestedItems() {
  return (
    <section class="suggested-items">
    <h3>Suggested Items</h3>
    <div class="item-card">
        <img src="https://via.placeholder.com/150x150" alt="Item Image" />
        <div class="item-details">
            <h4>Item 1</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.
            </p>
            <div class="price">$29.99</div>
        </div>
    </div>
    <div class="item-card">
        <img src="https://via.placeholder.com/150x150" alt="Item Image" />
        <div class="item-details">
            <h4>Item 2</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.
            </p>
            <div class="price">$49.99</div>
        </div>
    </div>
    <div class="item-card">
        <img src="https://via.placeholder.com/150x150" alt="Item Image" />
        <div class="item-details">
            <h4>Item 3</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique et risus vel bibendum.
            </p>
            <div class="price">$99.99</div>
        </div>
    </div>
</section>
  );
}

function Footer() {
    return (
      <footer>
        <p>&copy; 2023 Tech Hub. All rights reserved.</p>
      </footer>
    );

  }

  export { NavBar, HeroBanner, SearchBar, SaleItems, SuggestedItems, Footer };
