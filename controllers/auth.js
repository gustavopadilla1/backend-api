const admin = require('firebase-admin');
const firebase = require('firebase');


async function registrarUsuario(req, res) {
    const data = {
        email: req.body.email,
        password: req.body.password,
        emailVerified: false,
        disabled: false
    }
    try {
        const userResponse = await admin.auth().createUser(data)
        res.status(200).json(userResponse)
    } catch (error) {
        res.status(500).json({ msj: "El usuario ya existe" })
    }
}

async function login(req, res) {
    const data = {
        email: req.body.email,
        password: req.body.password
    }
    try {
        // await admin.auth().getUserByEmail(data.email)
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        res.status(200).json({msj:`BIENVENIDO:  ${data.email} !! `})
        
    } catch (error) {
        res.status(500).json({msj:"Credenciales Incorrectas!!"})
    }
}


module.exports = {
    registrarUsuario,
    login
}