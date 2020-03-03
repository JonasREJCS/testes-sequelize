import { Model, STRING, INTEGER, DATE, DECIMAL } from 'sequelize'
import { getPoolConexao } from '../../services/infra/SQL/SQL.service'
import { Cliente } from './cliente.model'
import { Fundo } from './fundo.model'
const sequelize = getPoolConexao()

export class Proposta extends Model { }
Proposta.init({
  propostaId: {
    type: INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  codigoProduto: {
    type: INTEGER.UNSIGNED,
    allowNull: false
  },
  numeroProposta: {
    type: STRING,
    allowNull: false
  },
  tipoProduto: {
    type: STRING,
    allowNull: false
  },
  criterioTributacao: {
    type: STRING,
    allowNull: false
  },
  dataImplantacao: {
    type: DATE,
    allowNull: true,
  },
  saldoAtual: {
    type: DECIMAL,
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
