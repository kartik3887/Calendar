import React from "react";
import "./Style/Work.css";

const WorkType = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          CAVES <span className="red"> INFOTECH </span>
        </h5>{" "}
        <br />
        <h4 className="card-subtitle mb-2 text-body-secondary">
          GROW YOUR <span className="red">BUSSINESS</span> WITH US
        </h4>
        <p className="card-text">Our Services</p>
        <ul>
          <li>Software Development</li>
          <li>IT Management</li>
          <li>Web Development</li>
          <li>App Development</li>
          <li>SEO</li>
          <li>Cloud</li>
        </ul>
        <button className="btn-work">Join Us</button> <br /> <br />
        <a href="#" className="card-link">
          <i class="fa-solid fa-phone"></i>
          +91 9209905101
        </a>{" "}
        <br />
        <a href="#" className="card-link">
          <i class="fa-solid fa-envelope"></i>
          cavesinfotech@gmail.com
        </a>
      </div>

      <div className="card-footer">
        <h5>Book more than one hour appointment </h5>
        <p>Pay Now !</p>
        <a href="">www.cavesinfotech.com</a>
      </div>
    </div>
  );
};

export default WorkType;
