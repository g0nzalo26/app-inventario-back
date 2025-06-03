
import express from 'express'

export class Server {

    constructor() {

        this.app = express()
        this.port = process.env.PORT

        //Middlewares

        this.routes()

        
    }

    routes(){

        this.app.get('/', (req, res) => {

            res.send('Hello...')

        })



    }

    listen(){

        this.app.listen( this.port, () => {
            console.log('Servidor Corriendo en Puerto', this.port)
        })

    }
    

}

