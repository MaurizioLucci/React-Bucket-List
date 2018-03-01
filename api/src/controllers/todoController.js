/*
==================
CONTROLLER
==================
*/

import '../models/index'
import Todo from '../models/todo'

export default {
  // ========= GET ALL TODOS =========
  todoAll: function (req, res) {
    res.send('NOT IMPLEMENTED: Todo list')
  },

  // ========= GET DETAIL TODOS =========
  todoShow: function (req, res) {
    res.send('NOT IMPLEMENTED: Todo detail: ' + req.params.id)
  },

  // ========= POST CREATE TODOS =========
  todoCreate: function (req, res) {
    const todo = new Todo({ name: 'ciao' })
    todo.save()
    console.log('create')
    res.json({ todo: 'hello' })
  },

  // ========= PUT UPDATE TODOS =========
  todoUpdatePut: function (req, res) {
    res.send('NOT IMPLEMENTED: Todo update GET')
  },

  // ========= DELETE TODOS =========
  todoDelete: function (req, res) {
    res.send('NOT IMPLEMENTED: Todo delete POST')
  }
}
