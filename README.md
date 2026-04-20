# Authentication Mini-System (MERN)

A simple authentication system built using the MERN stack. It allows users to sign up, log in, and access a protected dashboard using JWT-based authentication.

## Tech Stack
Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB (Atlas)

Authentication: JWT

Security: bcrypt

## Features
- User Signup & Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected Dashboard route
- Token stored in localStorage
- Logout functionality

## Authentication Flow
User signs up → password is hashed

User logs in → JWT token is generated

Token is stored in frontend

Token is sent in Authorization header (Bearer token)

Backend verifies token for protected routes

## API Endpoints
POST /api/auth/signup

POST /api/auth/login

GET /api/auth/dashboard (Protected)

# Setup

## Backend
cd backend

npm install

npm start

## Frontend
cd frontend

npm install

npm start

# Future Improvements
Refresh tokens

Email verification

Password reset

Role-based access control
