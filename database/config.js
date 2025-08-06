import mongoose from 'mongoose'

export const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN)
        console.log('Base de Datos Conectada')

    } catch (error) {
        console.log(error)
        throw new Error('Error en la conexion a la Base de Datos')
    }

}