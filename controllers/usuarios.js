const { request, response } = require('express');

const usuariosGet = (req = request, res = response)=>{

    const {q, nombre='no name', page=1 ,limit=10} = req.query;

    res.json({
        msg: 'endpoint get -controllers',
        q,
        nombre,
        page,
        limit
    });
}
const usuariosPost = (req, res = response)=>{
    const {body} = req;

    res.json({
        msg: 'endpoint  post - controllers',
        body
    });
}
const usuariosPut = (req = request, res = response)=>{

    const {id} = req.params;

    res.json({
        msg: 'endpoint  put - controllers',
        id
    });
}
const usuariosPatch = (req, res = response)=>{
    res.json({
        msg: 'endpoint  patch - controllers'
    });
}
const usuariosDelete = (req, res = response)=>{
    res.json({
        msg: 'endpoint  delete - controllers'
    });
}





module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}