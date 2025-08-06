
import express from 'express'
import cors from 'cors'

import { router as ProcuctsRouter } from '../routes/products.js'
import { dbConnection } from '../database/config.js'



export class Server {

    constructor() {

        this.app = express()
        this.port = process.env.PORT
        this.productosPath = '/api/productos'

        //Conectar a BD
        this.conectarDB()

        //Middlewares
        this.middlewares()

        // Rutas de Aplicación
        this.routes()


    }

    async conectarDB() {

        await dbConnection()

    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Lectura y Parseo de body
        this.app.use(express.json())


        // Directorio Público
        this.app.use(express.static('public'))

    }

    routes() {

        this.app.use(this.productosPath, ProcuctsRouter)

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor Corriendo en Puerto', this.port)
        })

    }


}

