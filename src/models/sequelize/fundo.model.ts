import { Model, DataTypes } from 'sequelize'
import { getPoolConexao } from '../../services/infra/SQL/SQL.service'

const sequelize = getPoolConexao()

export class Fundo extends Model { }
Fundo.init({
  fundoIdUnico: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  fundoId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  codigoProduto: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  nomeFundo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CNPJ: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numeroSusep: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Fundo'
})
