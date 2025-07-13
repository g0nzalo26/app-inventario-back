import { request, response } from 'express'


const productsGet = (req = request, res = response) => {

    const query = req.query

    res.json({
        msg: 'get API - controlador',
        query
    })

}

const productsPost = (req, res) => {

    const body = req.body

    res.json({
        msg: 'post API - controlador',
        body
    })

}

const productsPut = (req, res) => {

    const id = req.params.id

    res.json({
        msg: 'put API - controlador',
        id,
    })

}

const productsDelete = (req, res) => {

    res.json({
        msg: 'delete API - controlador'
    })

}

export {
    productsGet,
    productsPost,
    productsPut,
    productsDelete,

}
