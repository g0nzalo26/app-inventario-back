import mysql from 'mysql2/promise'

let connection

export const dbConnection = async () => {
    if (!connection) {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '62011539',
            database: 'inventario_app'
        })
        console.log('Base de datos conectada')
    }

    return connection
}