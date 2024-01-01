---

##  **NodeJS + PostgreSQL RESTful API Project**

---

## Project Overview:

This project demonstrates the development of a RESTful API using NodeJS and PostgreSQL. The API provides functionalities to perform CRUD operations on student records.

---

## Setup and Execution:

### 1. Prerequisites:
- Ensure that NodeJS and PostgreSQL are installed on your system.
- Install Postman for testing API endpoints.

### 2. Installation:

#### NodeJS Dependencies:
Navigate to the project directory and install the required NodeJS packages using npm:
```bash
npm install
```

#### PostgreSQL Setup:
- Create a PostgreSQL database named `studentsdb`.
- Configure the database connection in the `.env` file using the following format:
  ```
  DB_HOST=localhost
  DB_PORT=5432
  DB_USER=your_username
  DB_PASSWORD=your_password
  DB_NAME=studentsdb
  ```

### 3. Running the Application:
Start the NodeJS application by executing the following command:
```bash
node db.js
```
The application will start running on the default port `3000` or the port specified in the `.env` file.

### 4. Testing the API:
Use Postman to test the API endpoints:

- **Create Student**: Send a POST request to `http://localhost:3000/students` with the student details in the request body.
- **Retrieve Students**: Send a GET request to `http://localhost:3000/students` to retrieve all students or `http://localhost:3000/students/:id` to retrieve a specific student by ID.
- **Update Student**: Send a PUT request to `http://localhost:3000/students/:id` with the updated student details in the request body.
- **Delete Student**: Send a DELETE request to `http://localhost:3000/students/:id` to delete a student by ID.

---

## Conclusion:

Upon completing the setup and execution steps, you'll have a fully functional RESTful API for managing student records using NodeJS and PostgreSQL. Feel free to explore, modify, and extend the project as per your requirements.
