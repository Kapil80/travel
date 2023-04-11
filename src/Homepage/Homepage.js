import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS file

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <h1 className="banner-title">Travel with us</h1>
        <p className="banner-description">
          Discover the world's most amazing places with our guided tours
        </p>
        <Link to="/search" className="btn btn-primary">
          Explore tours
        </Link>
      </div>
      <div className="services">
        <h2 className="services-title">Our services</h2>
        <div className="service-card">
          <i className="fas fa-map-marker-alt service-icon"></i>
          <h3 className="service-name">Destination guidance</h3>
          <p className="service-description">
            Our travel experts will guide you to the best destinations
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-hiking service-icon"></i>
          <h3 className="service-name">Adventure tours</h3>
          <p className="service-description">
            Explore the world's most challenging landscapes with our adventure tours
          </p>
        </div>
        <div className="service-card">
          <i className="fas fa-umbrella-beach service-icon"></i>
          <h3 className="service-name">Relaxation tours</h3>
          <p className="service-description">
            Relax and unwind on the world's most beautiful beaches
          </p>
        </div>
      </div>
      <div className="testimonial">
        <h2 className="testimonial-title">What our customers say</h2>
        <p className="testimonial-quote">
          "I had an amazing experience with this travel company. The tour guides were knowledgeable and friendly, and the itinerary was well-planned. Highly recommended!"
        </p>
        <p className="testimonial-name">- Jane Doe</p>
      </div>
    </div>
  );
}

export default Home;
