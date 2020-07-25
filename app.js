const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
	res.render("home");
});

app.get("/about", (req, res)=>{
	res.render("about");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

