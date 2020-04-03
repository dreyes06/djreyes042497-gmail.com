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
//   const newProduct = {
    //       img: img,
    //       product: product,
    //       price: price
    //   }
    //   post_product().push(newProduct)
    
    const db = req.app.post('db')
    db.post_product(img, product, price).then(result => {
        res.status(200).send(result)

    })
    
}


module.exports = {
    getInventory,
    postProduct
    // getProduct,
    // removeProduct
}