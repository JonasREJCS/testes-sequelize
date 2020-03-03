import dotenv from 'dotenv'
dotenv.config()
import { Sequelize } from 'sequelize'

const database = process.env.DB_NAME
const user = process.env.DB_USER
const password = process.env.DB_SENHA
const host = process.env.DB_HOST
const multipleStatements = true

export const getPoolConexao = (): Sequelize => {
  if (database && user && password) {
    const sequelize = new Sequelize(database, user, password, {
      host: host,
      dialect: 'mariadb',
      pool: {
        max: 5,
        acquire: 30000,
        idle: 10000
      },
      dialectOptions: {
        multipleStatements: multipleStatements
      }
    })
    return sequelize
  } else {
    const erro = 'Arquivo .env com parâmetros de conexão faltando!'
    throw new Error(erro)
  }
}

export const testarConexao = async (): Promise<boolean> => {
  const sequelize = getPoolConexao()
  await sequelize
    .authenticate()
    .then(() => {
      console.log('Conexão realizada com sucesso.');
      return true
    })
    .catch(err => {
      console.error('Não foi possível conectar ao banco de dados: ', err);
      return false
    });
    return true
}
