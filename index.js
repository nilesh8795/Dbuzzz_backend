const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbconfig.js');
const userRoutes = require('./routes/UserRoutes.js');
const taskRoutes = require('./routes/TaskRoutes.js');
const cors = require('cors')

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'https://dbuzzz-frontend.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
