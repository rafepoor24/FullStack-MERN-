const {Schema,model}=require('mongoose');

const UsuarioSchema=new  Schema ({
    nombre:String,
    apellido:String,
    edad:Number,
    telefono:String,
    correo:String
},{

timestamps:true

});

module.exports=model('Usuario',UsuarioSchema);

