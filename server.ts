import express from 'express';
import imagesRoute from './src/routes/images';

const app = express();

const port = 3000;

app.use('/api/images', imagesRoute);

app.get('/', (req, res) => {
  res.status(200).send('Server is working');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Open this in your browser: http://localhost:${port}/`);
});

export default app;
