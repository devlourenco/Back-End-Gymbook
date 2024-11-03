const express = require("express");
const cors = require("cors");

const modelSignUp = require("./routes/signUpRoute");
const modelTraining = require("./routes/trainingRoute")


// linha para rodar a inicialização da tabela de cadastro.
// const signUpModel = require('./model/signUpModel');
// const trainingModel = require("./model/trainingModel")



const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", modelSignUp, modelTraining);
app.listen(5000, () => {
  console.log("TESTE DE SERVIDOR");
});
