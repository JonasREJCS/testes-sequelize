import dotenv from 'dotenv'
dotenv.config()

import { getPoolConexao } from './services/infra/SQL/SQL.service';
import { Cliente } from './models/sequelize/cliente.model';
import { Fundo } from './models/sequelize/fundo.model';
import { Proposta } from './models/sequelize/proposta.model';

const sequelize = getPoolConexao()
sequelize.query('DROP DATABASE `extratos-prev-zurich`', { raw: true })
sequelize.query('CREATE DATABASE `extratos-prev-zurich`', { raw: true })
sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
  .then(function () {
    return Cliente.sync({ force: true });
  }).then(function () {
    return Fundo.sync({ force: true });
  }).then(function () {
    return Proposta.sync({ force: true });
  })
  .then(function () {
    return sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
  })
  .then(function () {
    console.log('Database synchronised.');
  }, function (err) {
    console.log(err);
  });
