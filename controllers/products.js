import { request, response } from 'express'
import { dbConnection } from '../database/config.js'


const productsGet = async(req = request, res = response) => {

    try {

        const conn = await dbConnection()
        const [rows] = await conn.query('select * from productos')
        res.json(rows)
        
    } catch (error) {

        console.error(error)
        res.status(500).json({ msg: 'Error al obtener productos' })
        
    }

}

const productsPost = async(req, res) => {

    const { nombre, descripcion } = req.body

    try {

        const conn = await dbConnection()
        const query = 'insert into productos (nombre, descripcion) values (?, ?)'
        const [result] = await conn.execute(query, [nombre, descripcion])

        res.status(201).json({
            msg: 'Producto creado exitosamente',
            id: result.insertId,
            nombre,
            descripcion
        })
        
    } catch (error) {

        console.error('Error al insertar producto:', error)
        res.status(500).json({
            msg: 'Error al crear el producto',
            error
        })

    }

}

// const productsPut = (req, res) => {

//     const id = req.params.id

//     res.json({
//         msg: 'put API - controlador',
//         id,
//     })

// }

// const productsDelete = (req, res) => {

//     res.json({
//         msg: 'delete API - controlador'
//     })

// }

export {
    productsGet,
    productsPost,
    

}
