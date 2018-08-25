const { Router } = require('express');
const { createUser, getUser } = require('../controllers/users-ctrl');
const { createQuestion } = require('../controllers/questions-ctrl');

const router = new Router();

router.post('/users', createUser);
router.get('/users/:id', getUser);

router.post('/questions/:userId', createQuestion);

module.exports = router;
