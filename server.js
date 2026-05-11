const express = require("express");
const founderRoute = require('./Routes/founder');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/founder",founderRoute);

app.listen(PORT,() => {
  console.log(`Server is running on http://localhost:${PORT}`);
});