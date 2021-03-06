import { Model, DataTypes } from 'sequelize'
import { getPoolConexao } from '../../services/infra/SQL/SQL.service'

const sequelize = getPoolConexao()

export class Cliente extends Model { }
Cliente.init({
  clienteId: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nomeCliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CPF: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'Cliente'
})
