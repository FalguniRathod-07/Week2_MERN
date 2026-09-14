# User Authentication API

A backend REST API built with Node.js, Express.js, MongoDB, bcryptjs, and JSON Web Tokens (JWT).

This project provides user registration, secure password hashing, user login, JWT-based authentication, and a protected profile endpoint.

---

##  Project Overview

The User Authentication API allows users to:

- Register a new account
- Store passwords securely using bcryptjs
- Login using email and password
- Generate a JWT token after successful login
- Access a protected profile using the JWT token
- Prevent unauthorized access to protected routes

---

##  Features

- User Registration
- User Login
- Password Hashing with bcryptjs
- JWT Authentication
- Protected Profile Route
- MongoDB Database
- Express.js REST API
- Authentication Middleware
- Error Handling
- Password is not returned in the profile response

---

##  Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- dotenv
- Postman

---

##  Project Structure

```text
User_Authentication_API/
│
├── middleware/            
│   └── authMiddleware.js
│
├── models/
│   ├── Note.js
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── node_modules/
│
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
└── server.js
```

## Setup

1. Install Dependencies
Open the project folder in VS Code terminal:

```bash
npm install
```

2. Configure Environment Variables
Create a .env file using .env.example:

```bash
Copy-Item .env.example .env
```

The .env file should contain:
```env 

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/your_database_name
JWT_SECRET=your_jwt_secret

```

3. Start the Server

```bash
npm install
```

The server runs at:

http://localhost:5000


## Authentication API

1. Register User

**Method:**  POST
**Endpoint:** http://localhost:5000/api/auth/register

Request Body:

```JSON

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}

```

Example Response:

```JSON

{
  "message": "User registered successfully",
  "user": {
    "id": "USER_ID",
    "name": "Test User",
    "email": "test@example.com"
  }
}

```

2. Login User

**Method:** POST
**Endpoint:** http://localhost:5000/api/auth/login

Request Body:

```JSON

{
  "email": "test@example.com",
  "password": "password123"
}

```
Example Response:

```JSON

{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}

```
The returned JWT token is required to access the protected profile endpoint.


3. Get Protected Profile

**Method:** GET
**Endpoint:** http://localhost:5000/api/profile

Add the JWT token in the request header:

Example Response:

```JSON

{
  "message": "Protected profile accessed successfully",
  "user": {
    "_id": "USER_ID",
    "name": "Test User",
    "email": "test@example.com"
  }
}

```

The password is not returned in the profile response.


## Database

The project uses MongoDB for storing user information.

For local MongoDB, the connection can use:

mongodb://127.0.0.1:27017/user_authentication

MongoDB Compass can be used to view the stored users.


##  Author

Falguni Rathod


## License

This project was created for educational and internship purposes.



