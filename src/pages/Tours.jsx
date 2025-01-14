import React from "react";
import "./TourPackages.css";
import "./TripSteps.css";

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

      {/* Destination Start */}
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Destination
          </h6>
          <h1 className="mb-5">Tours</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-1.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    30% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Thailand
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-2.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    25% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Malaysia
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-3.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    35% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Australia
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: 350 }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/destination-4.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                20% OFF
              </div>
              <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Indonesia
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Destination Start */}

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



const TripSteps = () => {
    const steps = [
      {
        id: 1,
        icon: "fa-solid fa-suitcase-rolling",
        description: "Give Us the Requirement.",
      },
      {
        id: 2,
        icon: "fa-solid fa-envelope",
        description: "Few Tour Options will Email to You.",
      },
      {
        id: 3,
        icon: "fa-solid fa-handshake",
        description: "Request for any Changes or If not proceed with the Payment.",
      },
      {
        id: 4,
        icon: "fa-solid fa-bed",
        description:
          "Make a Reservation for Air, Hotels, Transport, Sightseeing, Guides, Etc.",
      },
      {
        id: 5,
        icon: "fa-solid fa-file-signature",
        description: "Within 72 Hours, Return Back to You with all Confirmation.",
      },
      {
        id: 6,
        icon: "fa-solid fa-passport",
        description: "Process Visa.",
      },
      {
        id: 7,
        icon: "fa-solid fa-plane-departure",
        description: "Enjoy your tour. Thank you.",
      },
    ];
  
    return (
      <div className="trip-steps">
        <h2 className="trip-steps-title">How to create your trip steps.</h2>
        <div className="steps-container">
          {steps.map((step) => (
            <div className="step" key={step.id}>
              <div className="step-circle">{step.id}</div>
              <i className={step.icon}></i>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
  export default TourPackages;