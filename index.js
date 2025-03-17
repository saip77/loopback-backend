
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});