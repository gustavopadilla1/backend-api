const product = require("../config/config-credenciales");
const   where = require("firebase/firestore");
 
async function obtenerProducts(req, res) {
    try {
        const _product = await product.get();
        const list = _product.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return res.status(200).json(list)
    } catch (error) {
        res.status(error).json(error);
    }
};

async function obtenerProductId(req, res) {
    try {
        const idProduct = req.params.id;
        const _product = await product.doc(idProduct).get().then(res=>{
            datos={
                id:res.id,
                ...res.data()
            }
        });
        return res.status(200).json(datos).end()

    } catch (error) {
        res.status(error).json(error);
    }
}


async function agregarProduct(req, res) {
    const data = req.body;
    const camposObligatorios = [
        !data.nombre,
        !data.precio
    ];
    try {
        if (camposObligatorios.includes(true)) {
            throw { codigo: 400, msgError: 'No se enviaron los parametros obligatorios' };        
        }
        
        await product.add(data);
        res.status(201).json({mensaje:`Producto Registrado Correctamente`,data }).end();

    } catch (error) {
        res.status(500).json(error);
    }
}


async function actualizarProduct(req, res) {
    try {
        const idProduct = req.params.id;
        const datos = req.body;

        if (!idProduct || !Object.keys(datos).length) {
            throw { codigo: 400, msgError: 'No se enviaron los parametros obligatorios para actualizar el producto' };
        }

        await product.doc(idProduct).update(datos);
        res.status(201).json({mensaje:`Producto Actualizado Correctamente`,datos }).end();

    } catch (error) {
        res.status(error).json({datos}).end();
    }
}

async function deleteProduct(req, res) {
    try {
        const idProduct = req.params.id;
        
        await product.doc(idProduct).delete();
        res.status(200).send({messaje: 'Producto Eliminado Correctamente'}).end()

    } catch (error) {
        res.status(error).json(error).end();
    }
}

module.exports = {
    obtenerProducts,
    obtenerProductId,
    agregarProduct,
    actualizarProduct,
    deleteProduct
};