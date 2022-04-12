import express from 'express';

import userRoutes from './routes/users.js';
const app = express();

const  PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    console.log("TEST");
    res.send("Hello from Homepage");
} );


app.listen(PORT, ()=> console.log(`Server Running on port: http://localhost:${PORT}`));