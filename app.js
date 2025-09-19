require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const uniqueCodeRoutes = require("./routes/uniqueCodeRoutes");
require('dotenv').config();

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5174',
  'http://localhost:5174'
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);



app.use(express.json());

connectDB();

app.use("/api", userRoutes);
app.use("/api/unique-code", uniqueCodeRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
