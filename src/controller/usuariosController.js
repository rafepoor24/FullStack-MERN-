const usuarioCtrl = {};

const usuarioModelo = require("../models/usuarioModelo");

usuarioCtrl.getUsuario = async (req, res) => {
  const usuarios = await usuarioModelo.find();
  res.json(usuarios);
};

usuarioCtrl.SaveUsuario = async (req, res) => {
  const { nombre, apellido, edad, telefono, correo} = req.body;
  const newUsuario = new usuarioModelo({
    nombre,
    apellido,
    edad,
    telefono,
    correo
  });
  await newUsuario.save();
  res.json({ massage: "user has been saved." });

};
usuarioCtrl.getUsuarioByID = async (req, res) => {
  const usuario = await usuarioModelo.findById(req.params.id);
  res.json(usuario);
};
usuarioCtrl.deleteUsuario = async (req, res) => {
  await usuarioModelo.findByIdAndDelete(req.params.id);
  res.json({ massage: "user has been deleted." });
};
usuarioCtrl.updateUsuario = async (req, res) => {
  const { nombre, apellido, edad, telefono, correo } = req.body;
  await usuarioModelo.findOneAndUpdate(req.params.id, {
    nombre,
    apellido,
    edad,
    telefono,
    correo
  });
  res.json({ massage: "user has been updated." });

};

module.exports=usuarioCtrl;