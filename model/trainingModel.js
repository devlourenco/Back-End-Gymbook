const { Sequelize, DataTypes } = require("sequelize");

const connection = require("../database/database");

const modelTraining = connection.define("Treino", {
  idTreino: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  grupo_muscular: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  exercicios: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  repeticoes: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  carga_do_treino: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

// modelTraining.sync({ force: true });

module.exports = modelTraining;
