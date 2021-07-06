const CategoriesModel = require('../models/OfferwayCategoriesModel');

class Get{

    constructor(){};

    async getCategories(){
        try {
            let categoriesModel = new CategoriesModel();
            let categories = await categoriesModel.offerwayCategoriesModel().find({}, {_id: 0}).exec();
            console.log('printing for test '+categories)
            return {categories: categories};
        } catch (error) {
            console.log('printing error in getCategories ', error);
            return error;
        }
    }

}

module.exports = Get

