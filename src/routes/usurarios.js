const {Router}=require('express');
const router=Router();

const{SaveUsuario,deleteUsuario,getUsuario,getUsuarioByID,updateUsuario}=require('../controller/usuariosController');
router.route('/')
.get(getUsuario)
.post(SaveUsuario)

router.route('/:id')
.get(getUsuarioByID)
.put(updateUsuario)
.delete(deleteUsuario)

module.exports=router;