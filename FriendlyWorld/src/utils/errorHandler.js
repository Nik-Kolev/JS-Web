const mongoose = require("mongoose")

module.exports = function errorHandler(error) {
    if (error instanceof mongoose.MongooseError) {
        return Object.values(error.errors).reduce((a, b) => {
            return a[b.path] = b.properties.message
        }, {})
    } else {
        if (error.message.includes('email')) {
            return { email: error.message }
        }
        return { error: error.message }
    }
}
