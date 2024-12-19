const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utils/db");

// Handling the cors policy
app.use(cors({
  origin:'http://localhost:3000', // Replace with the frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true // Allow credentials if needed (cookies, HTTP auth, etc.)
}))

app.use(express.json());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);

connectDB().then(() => {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
