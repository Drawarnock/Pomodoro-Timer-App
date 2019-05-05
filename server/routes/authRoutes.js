const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/auth/google/callback', passport.authenticate('google'));

router.get('/api/current_user', (req, res, next) => {
  res.send(req.user);
});

router.get('/api/logout', (req, res, next) => {
  req.logout();
  res.send({ message: 'logout' });
});

module.exports = router;
