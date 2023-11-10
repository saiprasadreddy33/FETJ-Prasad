
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const path = require('path');
const crypto = require('crypto');

const app = express();

const sessionSecret = crypto.randomBytes(20).toString('hex');

app.use(session({ secret: sessionSecret, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: '373318624732-u6hmousavfn270qlpp7li6j6uad8kh2a.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000/auth/google/callback',
  userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
  scope: ['profile', 'email']
}, (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/home');
  } else {
    res.send('<a href="/auth/google">Sign in with Gmail</a>');
  }
});

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/home');
  }
);

app.get('/home', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('home', { user: req.user, indianTime: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) });
  } else {
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = 3001;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
