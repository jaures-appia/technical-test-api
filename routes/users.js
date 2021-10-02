const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.getAllUsers);
router.post('/', usersCtrl.createUser);
router.get('/:id', usersCtrl.getOneUser);
router.put('/:id', usersCtrl.modifyUser);
router.delete('/:id', usersCtrl.deleteUser);

module.exports = router;