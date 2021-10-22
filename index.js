const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios").default;
const cors = require("cors");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

fetchData = async () => {
  const res = await axios.get(
    "https://nepse-data-api.herokuapp.com/data/todaysprice"
  );
  console.log(res.data);
  return res.data;
};

app.get("/", async (req, res) => {
  try {
    const nepseData = await fetchData();
  res.render("home.ejs", { nepseData });
  } catch (error) {
    res.render('error.ejs')
  }
  
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
