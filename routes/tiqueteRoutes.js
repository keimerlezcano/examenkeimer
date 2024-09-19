import Router from "express"
const tiqueteRoutes = Router()

import{getTiquete,PostTiquete,PutTiquete,DeleteTiquete, getTiqueteById}from '../controllers/tiqueteController.js'
tiqueteRoutes.get('/',getTiquete)
tiqueteRoutes.post('/crear',PostTiquete)
tiqueteRoutes.put('/:id',PutTiquete)
tiqueteRoutes.delete('/:id',DeleteTiquete)
tiqueteRoutes.get('/:id',getTiqueteById)

export default tiqueteRoutes

