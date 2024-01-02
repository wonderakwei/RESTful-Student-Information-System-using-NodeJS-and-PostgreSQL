---

## **NodeJS + PostgreSQL RESTful API Project**

---

## Project Overview:

This project showcases the development of a RESTful API built with NodeJS and PostgreSQL, focusing on CRUD operations for student records.

---

## Setup and Execution:

### 1. Prerequisites:
- Ensure that NodeJS and PostgreSQL are installed on your system.
- Install Postman or a similar tool for testing the API endpoints.

### 2. Installation:

#### NodeJS Dependencies:
Navigate to the project directory and install the required NodeJS packages using npm:
```bash
npm install
```

### Framework Used:
The project utilizes **Express.js** as the web framework for developing the RESTful API:
To install Express.js, navigate to your project directory and run:
```bash
npm install express
```

#### PostgreSQL Configuration:
- Create a PostgreSQL database named `studentsdb`.
- Configure the database connection details in the `.env` file as follows:
  ```
  DB_HOST=localhost
  DB_PORT=5432
  DB_USER=your_username
  DB_PASSWORD=your_password
  DB_NAME=studentsdb
  ```

### 3. Running the Application:
Launch the NodeJS application with the following command:
```bash
node server.js
```
The application will initialize on the default port `3000`, unless otherwise specified in the `.env` file.

### 4. Testing the API:
Utilize Postman to interact with the API endpoints:

- **Create Student**: Submit a POST request to `http://localhost:3000/students` with the student details in the request body.
- **Retrieve Students**: Issue a GET request to `http://localhost:3000/students` to fetch all students, or `http://localhost:3000/students/:id` for a specific student by ID.
- **Update Student**: Dispatch a PUT request to `http://localhost:3000/students/:id` containing the updated student details in the request body.
- **Delete Student**: Dispatch a DELETE request to `http://localhost:3000/students/:id` to remove a student based on their ID.

#### API Endpoints:
- `GET /api/v1/students`: Fetch all students.
- `GET /api/v1/students/:id`: Retrieve a student by ID.
- `POST /api/v1/students`: Add a new student.
- `PUT /api/v1/students/:id`: Modify a student by ID.
- `DELETE /api/v1/students/:id`: Remove a student by ID.

---

## Contributing:
We welcome pull requests. For significant changes, kindly initiate an issue to discuss potential modifications or enhancements.

---
