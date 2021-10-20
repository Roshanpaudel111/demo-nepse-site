const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios").default;
const cors = require("cors");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

fetchData = async () => {
  const data = await axios.get(
    "https://nepse-data-api.herokuapp.com/data/todaysprice"
  );
  console.log(data);
  return data;
};

app.get("/", (req, res) => {
  const nepseData = fetchData();
  res.render("home.ejs", { nepseData });
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
