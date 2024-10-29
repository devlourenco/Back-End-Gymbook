const express = require("express");
const trainingModel = require("../model/trainingModel");

const router = express.Router();

router.post("/training", (req, res) => {
  let { grupo_muscular, exercicios, repeticoes, carga_do_treino } = req.body;

  trainingModel
    .create({
      grupo_muscular,
      exercicios,
      repeticoes,
      carga_do_treino,
    })
    .then(() => {
      return res.status(200).json({
        errorStatus: false,
        mensageStatus: "Treino Registrado",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        errorStatus: true,
        mensageStatus: "Erro ao registrar treino",
        errorObject: error,
      });
    });
});

module.exports = router;