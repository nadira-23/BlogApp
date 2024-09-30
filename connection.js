const mongoose = require("mongoose");

//Write missing code here for database connection
const mongoURI = "mongodb://localhost:27017/BlogApp"; // Replace with your database URI

// Database connection
mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connection established");
});