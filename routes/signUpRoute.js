const express = require("express");

const signUpModel = require("../model/signUpModel");

const router = express.router();

router.post("/  ", (req, res) => {
  let { email, nome_usuario, senha } = req.body;

  signUpModel
    .create({
      email,
      nome_usuario,
      senha,
    })
    .then(() => {
      return res.status(201).json({
        errorStatus: false,
        mensageStatus: "Usuário Cadastrado!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        errorStatus: true,
        mensageStatus: "erro ao criar usuário",
        errorObject: error,
      });
    });
});

router.get("/listUsers", (req, res) => {
  let { idCadastro } = req.params;

  signUpModel
    .findByPk(idCadastro)
    .then((res) => {
      return res.status(201).json({
        errorStatus: false,
        mensageStatus: "Listagem de usuários",
      });
    })
    .catch((error) => {
      return res.status(401).json({
        errorStatus: true,
        mensageStatus: "erro ao listar usuários",
        errorObject: error,
      });
    });
});

router
  .delete("/deleteUser/:idCadastro", (req, res) => {
    let { idCadastro } = req.params;
    signUpModel.destroy({ where: idCadastro });
  })
  .then(
    res.status(201).json({
      errorStatus: false,
      mensageStatus: "Usuário deletado com sucesso!",
    })
  )
  .catch((error) => {
    return res.status(401).json({
      errorStatus: true,
      mensageStatus: "erro ao deletar usuário",
      errorObject: error,
    });
  });
