const mongoose = require('mongoose');

class MongooseConnection{

    constructor(){};
    
    async initializeConnection(){
        try {
            let options = {
                useNewUrlParser: true, 
                useUnifiedTopology: true, 
                useFindAndModify: false, 
                useCreateIndex: true
            };
            let url = 'mongodb+srv://swrnvinod40:Aadhya139$@cluster0.f3xak.mongodb.net/offerway?retryWrites=true&w=majority';
            console.log('printing before connection')
            await mongoose.connect(url,options );
            console.log('Connection Initialized');
        } catch (error) {
            console.log('Error ', error);
            throw error;
        }
    }
}

module.exports = MongooseConnection;

