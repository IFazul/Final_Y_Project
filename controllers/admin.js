exports.getAddProduct = (req,res) => {
    res.send("<form action='/add-product' method='post'><input name='hello' type='text' value='hello' /><button type='submit'>Submit</button></form>")
}

exports.postAddProduct = (req,res) => {
    const body = req.body;
    console.log(body)
    res.redirect("/")
}