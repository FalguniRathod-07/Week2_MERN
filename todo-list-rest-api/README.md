# To-Do List REST API

A small Express and MongoDB API for creating, updating, listing, and deleting to-do tasks.


## Project Overview

The To-Do List REST API allows users to create, view, update, and delete tasks through REST API endpoints.
The project also includes a health check endpoint and basic error handling for invalid requests.

## Features

- Create a new task
- Get all tasks
- Update a task
- Delete a task
- MongoDB database integration
- Task validation
- RESTful API endpoints
- Health check endpoint
- Invalid task ID handling
- Route not found handling
- Error handling


## Requirements

- Node.js 18 or newer
- MongoDB running locally, or a MongoDB Atlas connection string
- Postman (optional, for manual API testing)



##  Project Structure

```text
todo-list-rest-api/
│
├── src/
│   ├── models/
│   │   └── Task.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── todo-list.postman_collection.json
```


## Setup

Copy the example environment file:

```powershell
Copy-Item .env.example .env
```

Install the project dependencies:
```bash
npm install
```
Start the development server:
```bash
npm start
```

### Environment Variables

The .env file should contain:
```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/your_database_name
```

### Server URL

The server runs at :
http://localhost:3000

### API Base URL 

http://localhost:3000/api/tasks


## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/health` | Check that the API is running |
| GET | `/api/tasks` | List all tasks |
| POST | `/api/tasks` | Add a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |


## API Examples

1. Health Check

**Method:** GET

**URL:**
```text
http://localhost:3000/health

```

Response:

```JSON

{
  "status": "ok"
}

```
2. Get All Tasks

**Method:** GET

**URL:**
```text
http://localhost:3000/api/tasks

```

If you haven't created any tasks yet, the response will be:

```JSON
[]

```

3. Create Task

**Method:** POST

**URL:**
```text
http://localhost:3000/api/tasks

```

Body:

```JSON

{
  "title": "Complete MERN internship assignment",
  "description": "Finish To-Do List REST API",
  "completed": false
}

```

Response:

```JSON

{
  "_id": ".............",
  "title": "Complete MERN internship assignment",
  "description": "Finish To-Do List REST API",
  "completed": false
}

```
4. Update Task

**Method:** PUT

**URL:**
```text
http://localhost:3000/api/tasks/.........

```
Body:

```JSON

{
  "completed": true
}

```

Response:

```JSON

{
  "_id": "...............",
  "title": "Complete MERN internship assignment",
  "description": "Finish To-Do List REST API",
  "completed": true
}

```

5. Delete Task

**Method:** DELETE

**URL:**
```text
http://localhost:3000/api/tasks/.........

```

Reponse:
 
 204 No Content



## Postman

The project includes a Postman collection:

`todo-list.postman_collection.json`

Import the collection into Postman and test the API endpoints.

### Testing Order

1. Run **Add task** first.
2. Copy the `_id` from the response.
3. Set the collection variable `taskId` to the copied ID.
4. Run **Get all tasks** to verify the task.
5. Run **Update task** to modify the task.
6. Run **Delete task** to remove the task.
7. Run **Get all tasks** again to verify the deletion.


## Author

Falguni Rathod


## License

This project was created as part of a MERN/Backend internship assignment.