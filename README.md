# FETJ-Prasad
# My Auth App

## Overview

This Node.js application provides Gmail authentication and a design printing feature. Upon successful authentication, it displays user information, the current Indian time, and allows the user to generate a design based on the specified number of lines.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Printing Design](#printing-design)
- [License](#license)

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Passport.js](http://www.passportjs.org/)
- [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2)
- [EJS](https://ejs.co/)

## Installation

1. Clone the repository:

   git clone https://github.com/your-username/my-auth-app.git
   cd my-auth-app

    Install dependencies:

npm install

Set up Google OAuth credentials:

    Go to the Google Cloud Console.
    Create a new project.
    Enable the "Google+ API" and create OAuth 2.0 credentials.
    Set the redirect URI to http://localhost:3001/auth/google/callback.

Usage

To run the application, use the following command:

npm start

Visit http://localhost:3001 in your web browser.
Authentication

    Click the "Sign in with Gmail" button to authenticate using Google OAuth 2.0.
    On successful authentication, the application will display user information and the current Indian time.

Printing Design

    After successful authentication, an input box and a "Display" button will appear.
    Enter the number of lines (integer, max 100) and click "Display" to show the design.
