import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import associateRoute from './routes/associate.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGOURI)
  .then(() => console.log('Mongodb connection successful'))
  .catch(err => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('Server listening on port 3000!'));

app.use('/api/register', associateRoute);

app.use((err, _, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Internal service error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
