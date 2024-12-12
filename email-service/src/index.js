const express = require("express");
const emailRoutes = require("./routes/emailRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/emails", emailRoutes);

app.listen(PORT, () => {
  console.log(`Email service running on port ${PORT}`);
});
