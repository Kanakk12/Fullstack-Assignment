const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cardRoutes = require('./routes/cardRoutes');


const app = express();
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb://localhost:27017/helpcenter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/ping', (req, res) => {
  res.send('Server is running');
});

app.use('/cards', cardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
