import express from 'express'
import TodoController from '../controllers/todoController'

const router = express.Router()

// ========= GET ALL TODOS =========
router.get('/', TodoController.todoAll)

// ========= GET DETAIL TODOS =========
router.get('/:id', TodoController.todoShow)

// ========= POST CREATE TODOS =========
router.post('/create', TodoController.todoCreate)

// ========= PUT UPDATE TODOS =========
router.get('/:id/update', TodoController.todoUpdatePut)

// ========= DELETE TODOS =========
router.post('/:id/delete', TodoController.todoDelete)

export default router
