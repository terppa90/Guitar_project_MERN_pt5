import express from 'express';
const router = express.Router();

import { signin, signup } from '../controllers/user.js';
// send the details of the form to the backend
router.post('/signin', signin);
router.post('/signup', signup);

export default router;
