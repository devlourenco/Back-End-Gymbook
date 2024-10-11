const express = require("express");
const cors = require("cors");

// const signUpModel = require('./model/signUpModel');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("TESTE DE SERVIDOR");
});
