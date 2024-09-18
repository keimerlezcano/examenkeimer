import Router from "express"
const tiqueteRoutes = Router()

import{getTiquete,PostTiquete,PutTiquete,DeleteTiquete}from '../controllers/tiqueteController.js'
tiqueteRoutes.get('/',getTiquete)
tiqueteRoutes.post('/crear',PostTiquete)
tiqueteRoutes.put('/:id',PutTiquete)
tiqueteRoutes.delete('/:id',DeleteTiquete)

export default tiqueteRoutes

