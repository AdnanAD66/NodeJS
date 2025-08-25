const adminAuth =  (req, res, next) => {
    
    const token = 123

    const isAuthenticated = token === 123
    if (!isAuthenticated) {
        res.status(401).send('Unauthorized User')
    }else{
        next()
    }
}


module.exports = {
    adminAuth
}