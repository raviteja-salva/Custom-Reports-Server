const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reportRoutes = require('./routes/reportRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());

const PORT = 5000;
URI = "mongodb+srv://ravitejasalva:Ravi%40198@cluster0.crsvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

dotEnv.config();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(URI)
.then(() => {
    console.log("MongoDB connected successfully")
})
.catch((e) => {
    console.log(`Error: ${e}`)
})

app.use('/api' , reportRoutes);

app.listen(PORT, () => {
    console.log(`Server started and running at ${PORT}`);
})

