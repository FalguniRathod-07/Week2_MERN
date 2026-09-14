# Notes App Backend

A REST API for user authentication and personal notes, built with Node.js, Express, MongoDB, and JWT.


##  Project Overview

The Notes App Backend provides APIs for user registration, user login, and secure note management.
Users can register and log in to the application. After successful authentication, a JWT token is generated. The token is used to access protected note APIs.


## Features

### User Authentication
- User registration
- User login
- Password hashing using bcryptjs
- JWT token generation
- JWT authentication middleware
- Protected routes

### Notes Management
- Create a new note
- Get all notes
- Get a single note
- Update a note
- Delete a note

### Database
- MongoDB database integration
- Mongoose for database operations

### Security
- Passwords are stored in hashed form
- JWT-based authentication
- Protected note routes
- Environment variables for sensitive configuration


## Requirements
- Node.js 18 or later
- MongoDB database, local or hosted
- Postman for API testing


##  Project Structure

```text
notes-app-backend/
│
├── controllers/                  # Authentication and note handlers
│   ├── authController.js
│   └── noteController.js
│
├── middleware/                   # JWT authentication middleware
│   └── authMiddleware.js
│
├── models/                       # Mongoose User and Note models  
│   ├── Note.js
│   └── User.js
│
├── routes/                       # Authentication and note routes  
│   ├── authRoutes.js
│   └── noteRoutes.js
│
├── .env                          # Local environment variables (not committed)
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js                     # Express app and MongoDB connection

```


## Installation

Clone the repository and open the project directory:
```bash
cd notes-app-backend
```

Install the required dependencies:
```bash
npm install
```


## Environment Variables 

Create a `.env` file in the project root:

```env
PORT=7000
MONGO_URI=mongodb://127.0.0.1:27017/your_database_name
JWT_SECRET=your_jwt_secret
```

## Run the Server

Start the server:

```bash
npm start
```

For development with automatic restarts:

```bash
npm run dev
```

The API will be available at `http://localhost:7000` when MongoDB is connected.


### Authentication


| Operation | Method | Postman URL |
|---|---|---|
| Register User | POST | `http://localhost:7000/api/auth/register` |
| Login User | POST | `http://localhost:7000/api/auth/login` |

#### Register Request Body

```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "password": "secure-password"
}
```

Login request body:

```json
{
  "email": "ada@example.com",
  "password": "secure-password"
}
```

The login response contains a token. Include it in the Authorization header for protected note requests:

Authorization: Bearer <token>

### Notes API Endpoints 


| Operation | Method | Postman URL |
|---|---|---|
| Create Note | POST | `http://localhost:7000/api/notes` |
| Get All Notes | GET | `http://localhost:7000/api/notes` |
| Get One Note | GET | `http://localhost:7000/api/notes/<NOTE_ID>` |
| Update Note | PUT | `http://localhost:7000/api/notes/<NOTE_ID>` |
| Delete Note | DELETE | `http://localhost:7000/api/notes/<NOTE_ID>` |


#### Create or Update Note Request Body

```json
{
  "title": "Meeting notes",
  "content": "Discuss the project timeline."
}
```

All note endpoints require JWT authentication:

Authorization: Bearer <token>


## Error Responses

Common HTTP status codes include:

- `400` - Invalid or missing request data
- `401` - Missing, invalid, or expired authentication
- `404` - Note or resource not found
- `500` - Internal server error


## Author

Falguni Rathod


## License

This project was created as part of a MERN/Backend internship assignment.