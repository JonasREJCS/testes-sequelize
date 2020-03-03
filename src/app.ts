import { Sequelize, Model, DataTypes } from 'sequelize'
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

sequelize.sync()
  .then(() => User.create({
    username: 'HGELLO WROLS',
    birthday: new Date(1980, 6, 20)
  }))
  .then((jane: { toJSON: () => any; }) => {
    console.log(jane.toJSON());
  });