if(process.env.NODE_ENV == 'production') {
    module.exports = {mongoURI: 'mongodb+srv://danielfarah54:1029384756@cluster0.ow7fd.mongodb.net/blogapp-prod?retryWrites=true&w=majority'}
}
else {
    module.exports = {mongoURI: 'mongodb://localhost/blogapp'}
}