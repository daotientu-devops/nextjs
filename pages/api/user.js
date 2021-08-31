export default (req, res) => {
    res.status(200).json({name:'Robert'}) // Response helper
    //res.statusCode = 200
    //res.setHeader('Content-Type', 'application/json')
    //res.end(JSON.stringify({query: req.query}))
}