const mongoose = require("mongoose");

class OfferwayCategoriesModel{

    constructor(){
    };

    offerwayCategoriesModel(){
        if(mongoose.models && mongoose.models.categories){
            return mongoose.models.categories;
        } else {
            let categoryModel = new mongoose.Schema({}, {_id: false, id: false, strict: false});
           return mongoose.model('categories', categoryModel);
        }
    }

}

module.exports = OfferwayCategoriesModel;