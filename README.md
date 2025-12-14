🎵 Music Collaboration Platform API (Final Project MVP)
Project Overview

This is a REST API that allows musicians to collaborate online. Users can create accounts, log in, and manage tracks. The API handles user authentication and basic track management.

Key Features:

User registration and login

Password hashing for security

Track creation and retrieval

SQLite database for storing users and tracks

Error handling middleware

Technologies Used

Node.js & Express – Server framework

Sequelize – ORM for SQLite database

SQLite – Lightweight database

bcrypt – Password hashing

JWT – Authentication tokens

Postman – API testing

Setup Instructions

Clone the repository:

git clone https://github.com/bodun329/Final-Project-MVP.git
cd Final-Project-MVP


Install dependencies:

npm install


Run the server:

node index.js


Server runs on http://localhost:3000.

Database

The project uses SQLite. Sequelize automatically handles table creation for Users and Tracks. A test user is automatically created if it doesn't exist:

{
  "username": "testuser",
  "password": "1234"
}

API Endpoints
Users

Register
POST /users/register
Request body (JSON):

{
  "username": "yourusername",
  "password": "yourpassword"
}


Login
POST /users/login
Request body (JSON):

{
  "username": "yourusername",
  "password": "yourpassword"
}

Tracks

Create Track
POST /tracks
Request body (JSON):

{
  "title": "Track Title",
  "artist": "Artist Name"
}


Get All Tracks
GET /tracks

Testing

You can test API endpoints using Postman or curl. Make sure the server is running before sending requests.

Notes

Passwords are securely hashed with bcrypt.

JWT is used for authentication.

Only authenticated users can create or view tracks.
# Final-Project-MVP

## Overview
This is a Music Collaboration Platform REST API allowing users to register, login, and manage tracks. JWT-based authentication ensures secure access.

---

## Features
- User registration & login with JWT authentication
- Passwords hashed using bcrypt
- Tracks CRUD operations
- SQLite database with Sequelize ORM
- Role-based access (ready for future expansion)

---

## Installation
1. Clone the repo:
```bash
git clone https://github.com/YOUR_USERNAME/Final-Project-MVP.git
cd Final-Project-MVP
