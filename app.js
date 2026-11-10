require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');
const loginRouter = require('./routes/login');
const adminRouter = require('./routes/admin');
const app = express();
const port = 3000;
// Motor de plantillas HBS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// Middlewares para capturar POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Middlewares de sesión
app.use(session({
 secret: 'claveSecretaUTNFullstackM5U4_2026',
 resave: false,
 saveUninitialized: true
}));
// Middleware de ruta protegida (Ruta privada)
const secured = async (req, res, next) => {
 try {
 if (req.session.id_usuario) {
 next();
 } else {
 res.redirect('/login');
 }
 } catch (error) {
 console.error(error);
 }
};
app.get('/', (req, res) => {
 res.redirect('/login');
});
app.use('/login', loginRouter);
app.use('/admin', secured, adminRouter);
app.listen(port, () => {
 console.log('Servidor de Autenticación corriendo en http://localhost:3000');
});
