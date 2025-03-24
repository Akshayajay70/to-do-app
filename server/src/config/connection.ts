import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/todo_app')
  .then(() => console.log('MongoDB connected'))
  .catch((err: Error) => console.error('MongoDB connection error:', err));
