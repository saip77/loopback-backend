const express = require('express');
const router = express.Router();
const {getUsers, getUserById, createUser, editUser, deleteUser} = require('../controllers/userController');
router.get('/:id', getUserById);
router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
module.exports = router;