async function conect(){
    //confirma se está conectado com a variavel global
    if(global.conection && global.conection.state !== 'disconecte')
    return global.conection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root@localhost:3306/WEBII");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}



async function selectusuario(){
    const conn = await connection();
    const [rows] = await conn.query('SELECT * FROM usuario:');
    return rowa;
}

module.exports = {selectusuario}