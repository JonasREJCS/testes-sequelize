import { Model, STRING, INTEGER } from 'sequelize'
import { getPoolConexao } from '../../services/infra/SQL/SQL.service'
// import { Proposta } from './proposta.model'

const sequelize = getPoolConexao()

export class Fundo extends Model { }
Fundo.init({
  fundoIdUnico: {
    type: INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  fundoId: {
    type: INTEGER.UNSIGNED,
    allowNull: false
  },
  codigoProduto: {
    type: INTEGER.UNSIGNED,
    allowNull: false
  },
  nomeFundo: {
    type: STRING,
    allowNull: false
  },
  CNPJ: {
    type: STRING,
    allowNull: false,
  },
  numeroSusep: {
    type: STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Fundo'
})
