import express from 'express';
import dataRoutes from './data';

/**
 * Vars
 */
const router = express.Router();

/**
 * Routes handlers
 */
router.use('/v1/data', dataRoutes);

/**
 * Export
 */
export default router;
