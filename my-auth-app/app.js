const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const path = require('path');
const crypto = require('crypto');
const sessionSecret = crypto.randomBytes(20).toString('hex');
app.use(session({ secret: sessionSecret, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new GoogleStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));
  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });
  app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Sign in with Gmail</a>');
  });
  
  app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
  
  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
      const user = req.user;
      const indianTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
      res.render('home', { user, indianTime });
    }
  );
  
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  