const express = require("express");
const dotenv = require("dotenv");

const userRoutes = require("../server/routes/userRoutes");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
const app = express(); // main thing
dotenv.config();
connectDB();
app.use(express.json()); // to accept json data

app.use("/api/users", userRoutes);

// --------------------------deployment------------------------------
app.get("/", (req, res) => {
  res.send("API is running..");
});
// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);
