import express from 'express';

import goalControllers from '../controllers/goalControllers.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();
const { getGoals, getGoal, addGoalForm, addGoal, updateGoal, deleteGoal } =
    goalControllers;

router.get('/goals', getGoals);
router.get('/goals/:id', getGoal);
router.get('/add', verifyToken, addGoalForm);
router.post('/add', verifyToken, addGoal);
router.put('/goals/:id', verifyToken, updateGoal);
router.delete('/goals/:id', verifyToken, deleteGoal);

export default router;
