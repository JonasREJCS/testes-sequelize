import { Model, STRING, INTEGER } from 'sequelize'
import { getPoolConexao } from '../../services/infra/SQL/SQL.service'
// import { Proposta } from './proposta.model'

const sequelize = getPoolConexao()

export class Cliente extends Model { }
Cliente.init({
  clienteId: {
    type: INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nomeCliente: {
    type: STRING,
    allowNull: false
  },
  CPF: {
    type: STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'Cliente'
})
