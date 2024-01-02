const express = require('express'); 
const studentRoutes = require('./src/student/routes');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
   res.send('Hello from the simple server :)');
});

app.use('/api/v1/students', studentRoutes);

app.listen(port, () => console.log(`> Server is up and running on port: ${port}`));
