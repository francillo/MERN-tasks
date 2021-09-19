const mongoose = require('mongoose');
database_name = 'mern-tasks'
const URI = `mongodb://localhost/${database_name}`;
mongoose.connect(URI)
        .then(db=>console.log('DB is connected'))
        .catch(err=>console.error(err));

module.exports=mongoose;