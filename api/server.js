import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import associateRoute from './routes/associate.route.js';
import standardRoute from './routes/standard.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGOURI)
  .then(() => console.log('Mongodb connection successful'))
  .catch(err => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => console.log('Server listening on port 3000!'));

app.use(express.json());
app.use('/api/register', associateRoute);
app.use('/api/register', standardRoute);

// General Error from server
app.use((err, _, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Internal service error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
