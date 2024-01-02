const pool = require('../../db');
const queries = require('./queries');

const getstudents = (req, res) => {
    pool.query(queries.getstudents, (error, results) => {
        if (error) {
            console.error('Error executing query:', error.stack);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const getstudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getstudentById, [id], (error, results) => {
        if (error) {
            console.error('Error executing query:', error.stack);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const addstudent = (req, res) => {
    const { name, email, age, dob } = req.body;

    // Check if email already exists before adding the student to the database.
    // We can't have the same email for 2 students.
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (error) {
            console.error('Error checking email:', error.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.rows.length) {
            return res.status(400).json({ error: 'This Student Email Already Exists.' });
        }

        // Add student to the database.
        pool.query(queries.addstudent, [name, email, age, dob], (error, results) => {
            if (error) {
                console.error('Error adding student:', error.stack);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            
            res.status(201).send('Student Added to the Database Successfully!');
            console.log("Student Added to the DB");
        });
    });
};

const removestudent = (req, res) => {
    const id = parseInt(req.params.id);

    // Check if the student exists in the database.
    pool.query(queries.getstudentById, [id], (error, results) => {
        if (error) {
            console.error('Error fetching student:', error.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const studentExists = results.rows.length > 0;

        if (!studentExists) {
            return res.status(404).json({ error: 'Student does not exist in the database, could not remove student.' });
        }

        // Remove the student from the database.
        pool.query(queries.removestudent, [id], (error, results) => {
            if (error) {
                console.error('Error removing student:', error.stack);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            res.status(200).send('Student Removed From the database successfully.');
        });
    });
};

const updatestudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name,email } = req.body;

    // Check if student exists using the id before updating the record.
    pool.query(queries.getstudentById, [id], (error, results) => {
        if (error) {
            console.error('Error fetching student:', error.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const studentExists = results.rows.length > 0;

        if (!studentExists) {
            return res.status(404).json({ error: 'Student does not exist in the database, could not update student.' });
        }

        // Update the student record in the database.
        pool.query(queries.updatestudent, [name,email,id], (error, results) => {
            if (error) {
                console.error('Error updating student:', error.stack);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            res.status(200).send('Student updated successfully.');
        });
    });
};


module.exports = {
    getstudents,
    getstudentById,
    addstudent, 
    removestudent,
    updatestudent,
};
