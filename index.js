const express = require("express");
const app = express();
const db = require("./db");
const port = process.env.PORT || 3000;

app.use(express.json());

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);


const menuItemRoutes=require('./routes/menuRoutes');
app.use('/menu',menuItemRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to our Hotel");
});

app.listen(port, (req, res) => {
    console.log(`server started at ${port}`);
});
