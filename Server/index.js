import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';


const app = express();
dotenv.config();

// Middleware
app.use(bodyParser.json({  extended: true }));
app.use(bodyParser.urlencoded({  extended: true }));
app.use(cors());

// Routes
import userRoutes from './Routes/user.route.js';
app.use('/api', userRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);