import { Model, DataTypes } from 'sequelize'
import { getPoolConexao } from '../../services/infra/SQL/SQL.service'
import { Cliente } from './cliente.model'
import { Fundo } from './fundo.model'
const sequelize = getPoolConexao()

export class Proposta extends Model { }
Proposta.init({
  propostaId: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  codigoProduto: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  numeroProposta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipoProduto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  criterioTributacao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dataImplantacao: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  saldoAtual: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Proposta'
})

Proposta.belongsTo(Fundo, {
  foreignKey: 'fundoIdUnico',
  foreignKeyConstraint: true,
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
})


Proposta.belongsTo(Cliente, {
  foreignKey: 'clienteId',
  foreignKeyConstraint: true,
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
})
