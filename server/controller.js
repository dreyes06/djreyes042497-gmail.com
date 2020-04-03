const getInventory = (req, res) =>{
    const db = req.app.get('db')
    
    db.get_inventory().then(result => {
        res.status(200).send(result)
    }).catch(error => {
        console.log(error)
    })
}

const postProduct = (req, res) => {
  const {img, product, price} = req.body

    
    const db = req.app.get('db')
    db.create_product(img, product, price).then(result => {
        res.status(200).send(result)

    })
    
}


module.exports = {
    getInventory,
    postProduct
    // getProduct,
    // removeProduct
}