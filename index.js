const express = require("express");
const cors = require("cors");

const app = express();

const admin = require('firebase-admin');
const credenciales = require("./config/mystore-gp-firebase-adminsdk-eq1mq-95575f3042.json");

const port =process.env.PORT || 3000
admin.initializeApp({
    credential: admin.credential.cert(credenciales)
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', function(req,res) {res.json({mensaje:'Hola bienvenido esta es la Api-Rest!'})});
app.use(require('./routes/index'));


app.listen(port, () => {
    console.log('Server Listening on port: ' + port);
});


