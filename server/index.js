import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import Avatar from './models/avatar.models.js';
import path from 'path';

const app = express();

const __dirname = path.resolve();

app.use(cors());
app.use(json());

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/api/avatars', async (req, res) => {
  try {
    const avatars = await Avatar.find();
    res.json(avatars);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch avatars' });
  }
});



let port = process.env.PORT




app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

