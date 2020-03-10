if (process.env.NODE_ENV == "production") {
    module.exports = {
        mongoURI: "mongodb+srv://lucasrodrigues:lucas@cluster0-cgemx.mongodb.net/test?retryWrites=true&w=majority"
    }
} else {
    module.exports = { mongoURI: "mongodb://localhost/blogapp" }

}