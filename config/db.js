// mongosh "mongodb+srv://cluster0.ow7fd.mongodb.net/myFirstDatabase" --username danielfarah54
if(process.env.NODE_ENV == 'production') {
    module.exports = {mongoURI: 'mongodb+srv://cluster0.ow7fd.mongodb.net/myFirstDatabase" --username danielfarah54 --password 1029384756'}
}
else {
    module.exports = {mongoURI: 'mongodb://localhost/blogapp'}
}