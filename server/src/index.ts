import express, { Request, Response } from 'express';
import cors from 'cors';
import todoRoutes from './routes/todo';

const app = express();
const PORT: number | string = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Todo routes
app.use('/', todoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
