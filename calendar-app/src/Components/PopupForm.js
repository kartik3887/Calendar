import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/PopupForm.css";

function PopupForm({ selectedDate, closeForm = () => {} }) {
  
  // Step 1 : Create state for all form inputs
  const [formData, setFormData] = useState({
    workType: "",
    name: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
    message: "",
  });

  // Step 2: Update the state on form field changes
  const handleChange = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", FormData);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("response data:", response);

      if (response.ok) {
        const responseData = await response.json();
        alert("Appointment book successful");
        setFormData({
          workType: "",
          name: "",
          email: "",
          appointmentDate: "",
          appointmentTime: "",
          message: "",
        });
        console.log(responseData);
      } else {
        console.log("error inside response", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={closeForm}>
          &times;
        </span>
        <h2>Book Appointment</h2>

        <p>
          Selected Date:{" "}
          <strong>
            {selectedDate ? selectedDate.toDateString() : "No date selected"}
          </strong>
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="workType">Work Type</label> <br />
          <select
            id="workType"
            name="workType"
            value={formData.workType}
            onChange={handleChange}
          >
            <option value="">Select Work Type</option>
            <option value="IT Management">IT Management</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="SEO">SEO</option>
            <option value="Cloud">Cloud</option>
            <option value="Others">Others</option>
          </select>{" "}
          <br />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="appointmentDate">Date</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
          />
          <label htmlFor="appointmentTime">Time</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" className="cancel-button" onClick={closeForm}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
