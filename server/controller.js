getInventory = (req, res) =>{
    const db = req.app.get('db')

    db.get_inventory().then(result => {
        res.status(200).send(result)
    }).catch(error => {
        console.log(error)
    })
}


module.exports = {
    getInventory,
    // getProduct,
    // postProduct,
    // removeProduct
}