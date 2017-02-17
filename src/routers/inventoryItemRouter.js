import express from 'express'
const router = express.Router({mergeParams: true})
import InventoryItem from '../models/InventoryItem'
import InventoryItemController from '../controllers/InventoryItemController'


router.get('/items', (req, res) => {
  InventoryItemController.getAll()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

router.get('/items/:id', (req, res) => {
  InventoryItemController.getById(req.params.id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

router.post('/items', (req, res) => {
  InventoryItemController.insert(req.body)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

router.put('/items/:id', (req, res) => {
  InventoryItemController.update(req.params.id, req.body)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

router.delete('/items/:id', (req, res) => {
  InventoryItemController.remove(req.params.id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

export default router
