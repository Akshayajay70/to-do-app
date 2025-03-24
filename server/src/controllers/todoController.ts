import { Request, Response } from 'express';
import Todo from '../models/todoSchema';

// Get all todos
export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

// Create a new todo
export const createTodo = async (req: Request, res: Response) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
};

// Update a todo
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
};

// Delete a todo
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
};
