const Appointment = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------
// Appointment Logic
// *-------------------
const appointment = async (req, res) => {
  try {
    // console.log(req.body)
    // res.status(200).send({ message: req.body });

    const { name, email, appointmentDate, appointmentTime, workType, message } =
      req.body;

    if (
      !name ||
      !email ||
      !appointmentDate ||
      !appointmentTime ||
      !workType ||
      !message
    ) {
      return res
        .status(400)
        .json({
          msg: "All fields are required.",
          missingFields: {
            name,
            email,
            appointmentDate,
            appointmentTime,
            workType,
            message,
          },
        });
    }

    const newAppointment = new Appointment({
      name,
      email,
      appointmentDate,
      appointmentTime,
      workType,
      message,
    });

    const savedAppointment = await newAppointment.save();
    return res.status(201).json({
      msg: "Appointment booked successfully!",
      data: savedAppointment,
    });
  } catch (error) {
    // res.status(500).json({ message: "Internal server error" });
    console.error("Error booking appointment", error);
    if (!res.headersSent) {
      res.status(500).send({ msg: "Internal server error" });
    }
  }
};

module.exports = { home, appointment };
