const express = require('express');

const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');


const cors = require('cors');



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


  app.listen(PORT, () => {
    console.log('listening on *:5000')
    console.log("hi")
    console.log(`server starting at port${PORT}`);
  })






  let mailOptions = {
    from: data.email,
    to: 'doung1118@gmail.com',
    subject: `message from ${data.name}`,
    html: `

    <h3>Information </h3>
    <ul>
    <li>Name:${data.name}</li>
    <li>${data.lastname}</li>
    <li>${data.email}</li>
     </ul>

     <h3>message</h3>
     <p>${data.message}</p>

    `
  };


  smtpTransport.sendMail(mailOptions, (error, response) => {

    if (error) {
      res.send(error)
    }

    else {

      res.send('success')

    }

  })


  smtpTransport.close();


})








// const PORT = process.env.PORT || 300;

// app.listen(PORT, () => {

//   console.log(`server starting at port ${PORT}`);
// })