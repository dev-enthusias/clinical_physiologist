import express from 'express';
import { registerAssociates } from '../controllers/associate.controller.js';

const router = express.Router();

router.post('/associate', registerAssociates);

export default router;
