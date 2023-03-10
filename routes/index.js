// Add required (available) routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Sets each rout's file location
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
