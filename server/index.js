const express = require('express');
const fs = require('fs');
const https = require('https');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoURI);

const privateKey = fs.readFileSync('server.key');
const certificate = fs.readFileSync('server.cert');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes');

require('./services/passport');

app.use(authRoutes);

const PORT = process.env.PORT || 5000;

https.createServer({ key: privateKey, cert: certificate }, app).listen(PORT);
