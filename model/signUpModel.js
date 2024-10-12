const { Sequelize, DataTypes } = require("sequelize");

const connection = require("../database/database");

const modelSignUp = connection.define("Cadastro", {
  idCadastro: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  nome_usuario: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  senha: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  data_criacao: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

modelSignUp.sync({ force: true });

module.exports = modelSignUp;
