(async () => {
    const database = require('./model/services/dborm')
    const Cliente = require('./model/entidades/cliente')

    console.log(' Criar tabela =====================================================');
    const resultado = await database.sequelize.sync();
    console.log(resultado);

    console.log(' Criar um registro =================================================');
    const inserirCliente = await Cliente.create({
        nome: 'João da Silva',
        idade: 10,
        endereco: 'Rua Paulista, n 10000'
    })
    console.log(inserirCliente);

    console.log('Buscar um registro ================================================');
    const cliente = await Cliente.findByPk(1);
    console.log(cliente);


    comsole.log('Alterar um registro ===============================================');
    const clienteAlterar = await Cliente.findByPk(1);
    clienteAlterar.nome = " Fernanda Sena"
    const resultadoSave = await clienteAlterar.save();
    console.log(resultadoSave);
})();