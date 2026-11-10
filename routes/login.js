const express = require('express');
const router = express.Router();
const usuariosModel = require('../models/usuariosModel');
// Muestra la vista del formulario de login
router.get('/', (req, res) => {
 res.render('login');
});
// Logout: destruye la variable de sesión y redirige al login
router.get('/logout', (req, res) => {
 req.session.destroy();
 res.redirect('/login');
});
// Procesa los datos del formulario (POST)
router.post('/', async (req, res) => {
 try {
 const usuario = req.body.usuario;
 const password = req.body.password;
 const data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);
 if (data !== undefined) {
 req.session.id_usuario = data.id;
 req.session.nombre = data.usuario;
 res.redirect('/admin');
 } else {
 res.render('login', { error: true });
 }
 } catch (error) {
 console.error(error);
 res.render('login', { error: true });
 }
});
module.exports = router;
