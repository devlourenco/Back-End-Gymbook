const express = require("express");
const signUpModel = require("../model/signUpModel");
const modelSignUp = require("../model/signUpModel");

const router = express.Router();

router.post("/signup", (req, res) => {
  let { email, nome_usuario, senha } = req.body;

  signUpModel
    .create({
      nome_usuario,
      email,
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
        mensageStatus: "Erro ao criar usuário",
        errorObject: error,
      });
    });
});

router.get('/listAllUsers', (req, res) => {
  modelSignUp.findAll().then(
    (response) => {
      return res.status(201).json({
        errorStatus: false,
        mensageStatus: "All Users",
        data: response
      })
    }
  ).catch((error) => {
    return res.status(400).json({
      errorStatus: true,
      mensageStatus: "Error on list all users",
      errorObject: error
    })
  })
})

router.get("/listUsers/:idCadastro", (req, res) => {
  let { idCadastro } = req.params;

  signUpModel
    .findByPk(idCadastro)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          errorStatus: true,
          mensageStatus: "Usuário não encontrado",
        });
      }
      return res.status(200).json({
        errorStatus: false,
        mensageStatus: "Listagem de usuários",
        user,
      });
    })
    .catch((error) => {
      return res.status(401).json({
        errorStatus: true,
        mensageStatus: "Erro ao listar usuários",
        errorObject: error,
      });
    });
});

router.delete("/deleteUser/:idCadastro", (req, res) => {
  let { idCadastro } = req.params;

  signUpModel
    .destroy({ where: { id: idCadastro } })
    .then((deleted) => {
      if (!deleted) {
        return res.status(404).json({
          errorStatus: true,
          mensageStatus: "Usuário não encontrado",
        });
      }
      return res.status(200).json({
        errorStatus: false,
        mensageStatus: "Usuário deletado com sucesso!",
      });
    })
    .catch((error) => {
      return res.status(401).json({
        errorStatus: true,
        mensageStatus: "Erro ao deletar usuário",
        errorObject: error,
      });
    });
});

module.exports = router;
