const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoute');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fullstackcluster.by4l3g9.mongodb.net/lab4`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(userRouter);


app.listen(8080, () => { console.log('Server is running...')});