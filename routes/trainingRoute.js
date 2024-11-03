const express = require("express");
const trainingModel = require("../model/trainingModel");
const { where } = require("sequelize");

const router = express.Router();

router.post("/InsertTraining", (req, res) => {
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

router.get("/training/:idTreino", (req, res) => {
  let { idTreino } = req.params;

  trainingModel
    .findByPk(idTreino)
    .then((training) => {
      if (!training) {
        return res.status(404).json({
          errorStatus: true,
          mensageStatus: "Treino não encontrado",
        });
      }
      return res.status(200).json({
        errorStatus: false,
        mensageStatus: "Lista de Treinos",
        training,
      });
    })
    .catch((error) => {
      return (401).json({
        errorStatus: true,
        mensageStatus: "Erro ao listar os treinos",
        errorObject: error,
      });
    });
});

//GET genérico
router.get("/allTraining", (req, res) => {
  trainingModel
    .findAll()
    .then((response) => {
      return res.status(201).json({
        errorStatus: false,
        mensageStatus: "Listagem de Treinos",
        data: response,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        errorStatus: true,
        mensageStatus: "Erro ao listar treinos",
        errorObject: error,
      });
    });
});

router.delete("/training/:idTreino", (req, res) => {
  let { idTreino } = req.params;

  trainingModel
    .destroy({ where: { idTreino } })
    .then((deleted) => {
      if (!deleted) {
        return res.status(404).json({
          errorStatus: true,
          mensageStatus: "Treino não encontrado",
          errorObject: error,
        });
      }
      return res.status(201).json({
        errorStatus: false,
        mensageStatus: "Treino Deletado com sucesso!",
      });
    })
    .catch((error) => {
      return res.status(401).json({
        errorStatus: true,
        mensageStatus: "Erro ao deletar o treino",
        errorObject: false,
      });
    });
});

module.exports = router;
