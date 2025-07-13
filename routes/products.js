import { Router } from 'express'
import { productsDelete, productsGet, productsPost, productsPut } from '../controllers/products.js'

export const router = Router()

router.get('/', productsGet )

router.post('/', productsPost )

router.put('/:id', productsPut )

router.delete('/', productsDelete )