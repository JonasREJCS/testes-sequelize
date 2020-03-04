import { Model, DataTypes } from 'sequelize'
import { getPoolConexao } from '../../services/infra/SQL/SQL.service'

const sequelize = getPoolConexao()

export class Empresa extends Model { }
Empresa.init({
  empresaId: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nomeEmpresa: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Empresa'
})
