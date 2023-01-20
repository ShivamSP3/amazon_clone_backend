const mongooose = require('mongoose');
const ratingSchema = require('./rating');
const productSchema = mongooose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    images:[{
        type : String,
        required:true
    }],
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    ratings:[ratingSchema]
});

const Product = mongooose.model('Product',productSchema);

module.exports = {Product, productSchema };