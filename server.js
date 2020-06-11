const express = require('express');

const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');


const cors = require('cors');
// what is this never ??????????// 


const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;


//build static here // 
app.use(express.static(path.join(__dirname, 'client/build')));



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//static build here //
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));

});

app.post('/api/forma', (req, res) => {

  let data = req.body
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'doung1118@gmail.com',
      pass: 'Aa19851118',

    }

  });
});


app.listen(PORT, () => {
  console.log("hi")
  console.log(`server starting at port${PORT}`);
})