const express = require('express');
const authRoutes = require('./auth');
const homeRoutes = require('./home');
const adminRoutes = require('./admin');
const petRoutes = require('./pets');
const journalRoutes = require('./journals');

const router = express.Router();

router.use(authRoutes);
router.use(homeRoutes);
router.use(adminRoutes);
router.use(petRoutes);
router.use(journalRoutes);

module.exports = router;
