import express from 'express';
import dataCtrl from '../controllers/data';

/**
 * Notice
 * Add {mergeParams: true} option to get parents params
 */
const router = express.Router({mergeParams: true});

/**
 * Routes /
 */
router.route('/')
// POST /api/data - Send incomming data
.post(
  dataCtrl.send
);

/**
 * Export
 */
export default router;
