// required mongoose 
const mongoose = require('mongoose')

// create a variable to identify url database project
const connectionUri = 'mongodb://127.0.0.1:27017/task-manager_project'

// create a connection between back-end & front-end
const mongo_DB_Server = () => mongoose.connect(connectionUri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(_ => console.log('connection established for database'))
    .catch(_ => console.log('error connecting ...'))


module.exports = mongo_DB_Server