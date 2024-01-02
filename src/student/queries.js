const getstudents = 'SELECT * FROM students';
const getstudentById = 'SELECT * FROM students WHERE id = $1';
const checkEmailExists ='SELECT s FROM students s WHERE s.email = $1';
const addstudent = ' INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)';
const removestudent = ' DELETE FROM students WHERE id =$1';
const updatestudent = 'UPDATE students SET name = $1, email =$2 WHERE id =$3'; 

module.exports = {
    getstudents,
    getstudentById,
    checkEmailExists,
    addstudent,
    removestudent,
    updatestudent,
};
