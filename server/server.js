const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

app.use(bodyParser.json());

app.use(session({
  secret: 'scoobysnack',
  saveUnitinitialized: false,
  resave: false
}))

//MiddleWare

app.post('/api.login', (req, res) => {
  const {role} = req.body;
  res.status(200).send(role);
  req.session.user = {
    id: req.session.id,
    role: role
  };
  res.status(200).send(role);
});


app.get('/api/permission', (req, res) => {
  if(req.session.user.role === 'admin') {
    res.status(200).send('onwards')
  } else {
    res.status(200).send(null);
  }
})

const port = 3010;
app.listen(port, () => console.log(`Magic Happens on Port:${port}`));
