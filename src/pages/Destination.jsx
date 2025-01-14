import React from 'react';
import { useLocation } from 'react-router-dom';

function Destination() {
  const location = useLocation();
  const selectedPackage = location.state?.package;

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Destination
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Destination
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {selectedPackage ? (
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.name}
                className="img-fluid rounded w-100"
              />
              <h2 className="mt-4">{selectedPackage.name}</h2>
              <div className="d-flex mb-3">
                <p className="mb-0 me-4">
                  <i className="fa fa-clock text-primary me-2"></i>
                  {selectedPackage.duration}
                </p>
                <p className="mb-0">
                  <i className="fa fa-money-bill text-primary me-2"></i>
                  Starting from {selectedPackage.price}
                </p>
              </div>
              <p className="mb-4">Experience an unforgettable journey with our carefully curated package.</p>
            </div>
            <div className="col-lg-4">
              <div className="bg-light p-4 rounded">
                <h4 className="mb-4">Book This Tour</h4>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="mb-3">
                    <input type="date" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Book Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container text-center py-5">
          <h2>Please select a package from the Tours page</h2>
        </div>
      )}
    </div>
  );
}

export default Destination;
