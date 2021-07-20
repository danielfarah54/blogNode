// mongosh "mongodb+srv://cluster0.ow7fd.mongodb.net/myFirstDatabase" --username danielfarah54
if(process.env.NODE_ENV == 'production') {
    module.exports = {MONGODB_URI: process.env.MONGODB_URI}
}
else {
    module.exports = {MONGODB_URI: 'mongodb://localhost/blogapp'}
}