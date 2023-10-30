import express from 'express';

import {registerStandard} from '../controllers/standard.controller.js'

const router = express.Router();

router.post('/standard', registerStandard);

export default router;

