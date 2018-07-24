const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

app.use(bodyParser.json());

//MiddleWare

const port = 3010;
app.listen(port, () => console.log(`Magic Happens on Port:${port}`));
