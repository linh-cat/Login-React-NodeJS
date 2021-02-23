var express = require("express");
var mysql = require("mysql");
var router = express.Router();

const users = [
  {
    email: "abc@gmail.com",
    password: "12345",
  },
];

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1",
  database: "login",
});

router.post("/register", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT  INTO users (email, password) VALUES (?,?)",
    [email, password],
    (err, result) => {
      console.log(err);
    }
  );
});

router.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email =  ?  AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.status(403).send({
          err: err,
        });
      }
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(200).send({
          message: "Wrong email/password combination!",
        });
      }
    }
  );
});

module.exports = router;
