const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Home page");
});

app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
