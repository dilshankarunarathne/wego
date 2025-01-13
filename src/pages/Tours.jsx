import React from "react";
import "./TourPackages.css";

const TourPackages = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="search-bar">
          <select className="dropdown">
            <option>Tour Country</option>
            <option>Sri Lanka</option>
            <option>Maldives</option>
            <option>Singapore</option>
            <option>Thailand</option>
          </select>
          <select className="dropdown">
            <option>Tour duration</option>
            <option>3 Days</option>
            <option>7 Days</option>
            <option>14 Days</option>
          </select>
          <input type="date" className="date-picker" />
          <button className="quote-button">Get a Quote in 5 min</button>
          <img
            src="profile.jpg" // Replace with actual image path
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </header>

      {/* Tour Packages Section */}
      <section className="tour-packages">
        <h2>Tour Packages</h2>
        <div className="packages-grid">
          <div className="package">
            <img
              src="sri-lanka.jpg" // Replace with actual image path
              alt="Sri Lanka Tours"
              className="package-img"
            />
            <h3>Sri Lanka Tours</h3>
            <button className="view-button">View Package ➜</button>
          </div>
          <div className="package">
            <img
              src="maldives.jpg" // Replace with actual image path
              alt="Maldives Tours"
              className="package-img"
            />
            <h3>Maldives Tours</h3>
            <button className="view-button">View Package ➜</button>
          </div>
          <div className="package">
            <img
              src="singapore.jpg" // Replace with actual image path
              alt="Singapore Tours"
              className="package-img"
            />
            <h3>Singapore Tours</h3>
            <button className="view-button">View Package ➜</button>
          </div>
          <div className="package">
            <img
              src="thailand.jpg" // Replace with actual image path
              alt="Thailand Tours"
              className="package-img"
            />
            <h3>Thailand Tours</h3>
            <button className="view-button">View Package ➜</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourPackages;
