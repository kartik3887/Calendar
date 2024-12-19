import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Style/Calendar.css";
import PopupForm from "./PopupForm";
import WorkType from "./WorkType";
import Navbar from "./Nav";



const Calendar = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const successMessage = queryParams.get('message');

  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]); // Changed to array
  const [startDay, setStartDay] = useState(0); // Start day of the month (e.g., 0 = Sunday)
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];

    // Get all the days of the month
    while (date.getMonth() === month) {
      days.push(new Date(date)); // Add each date to the array
      date.setDate(date.getDate() + 1); // Move to the next day
    }

    setDaysInMonth(days);
    setStartDay(new Date(year, month, 1).getDay()); // Get the starting day of the month
  }, [currentDate]);

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; // Adjusted for Sunday to Saturday

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
    <Navbar/>
      <div className="row">
        <div className="container calendar col-sm-9">
          <h4 className="heading-app">Book an Appointment Now!</h4>
          <div className="header">
          {successMessage && <div className="success-message">{successMessage}</div>}
            <button onClick={prevMonth}> &lt; Back &gt;</button>
            <span>
              {currentDate.toLocaleDateString("default", { month: "long" })}{" "}
              {""}
              {currentDate.getFullYear()}
            </span>
            <button onClick={nextMonth}> &lt; Next &gt;</button>
          </div>

          <div className="day-names">
            {dayNames.map((day) => (
              <div key={day} className="day-name">
                {day}
              </div>
            ))}
          </div>

          <div className="days days-number">
            {/* Empty divs to fill space before the start of the month */}
            {Array.from({ length: startDay }).map((_, index) => (
              <div key={index} className="empty-day">
                {/* Empty div for spacing */}
              </div>
            ))}

            {daysInMonth.map((day) => (
              <div
                key={day.toString()} // Use day.toString() for a unique key
                className={`day ${
                  day.getDate() === new Date().getDate() &&
                  day.getMonth() === new Date().getMonth()
                    ? "today"
                    : ""
                } ${
                  selectedDate &&
                  day.toDateString() === selectedDate.toDateString()
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day.getDate()}
              </div>
            ))}
          </div>
        </div>

        {/* Render the form only when a date is selected */}
        {selectedDate && (
          <PopupForm
            selectedDate={selectedDate}
            // Close the form on submission or cancel
          />
        )}

        <div className="col-sm-3">
          <WorkType />
        </div>
      </div>
   
    </>
  );
};

export default Calendar;
