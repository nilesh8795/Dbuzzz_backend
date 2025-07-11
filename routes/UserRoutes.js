const express = require('express');
const router = express.Router();
const { registerUser, loginUser,getUserProfile } = require('../controllers/UserController');
const authMiddleware = require('../middleware/tokenVerify');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/me', authMiddleware, getUserProfile); 

module.exports = router;
