import mongoose, { Schema } from "mongoose";

const transactionschema = Schema({
   
    title: {
        type:String,
        required: true,
        trim: true,

    },
    amount: {
        type: Number,
        required: true,
    },
    categories: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        enum :  ["expense", "income"],
        meesage : 'Type Must be one of them "expense" or "income' 
        
    },
    created_at:{type : Date , default: Date.now},
    updated_at:Date,

});
export default mongoose.model("transaction", transactionschema);