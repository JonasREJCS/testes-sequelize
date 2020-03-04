import { Model, DataTypes } from 'sequelize'
import { getPoolConexao } from '../../services/infra/SQL/SQL.service'
import { Empresa } from './empresa.model'

const sequelize = getPoolConexao()

export class Equipe extends Model { }
Equipe.init({
  equipeId: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nomeEquipe: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Equipe'
})

Equipe.hasOne(Empresa, {
  foreignKey: 'empresaId',
  foreignKeyConstraint: true,
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION'
})