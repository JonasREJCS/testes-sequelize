import { testarConexao } from './SQL.service';

test('testa a conexão ao banco de dados', async (done) => {
  expect(await testarConexao()).toBe(true);
  done()
});