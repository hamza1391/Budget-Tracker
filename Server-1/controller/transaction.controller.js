import transactionModel from "../model/transaction.model.js";
import mongoose from "mongoose";
export const getTransaction = async (req, res) => {
    try {
        const transaction = await transactionModel.find();
        res.status(200).json({
            success: true,
            count: transaction.length,
            data: transaction,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "server error"
        })
    }
}
export const addTransaction = async (req, res) => {

    try {


        const { title, amount, categories, type } = req.body;
        if ( !title || !amount || !categories || !type) {
            return res.status(400).json({
                success: false,
                error: error
            });
        };

        const transaction = await transactionModel.create({
            
            title,
            amount,
            categories,
            type
        });


        res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error,
        })
    }
};
export const deleteTransaction = async (req, res) => {
    try {
   
        const transaction = await transactionModel.findByIdAndDelete(req.params.id);
        console.log(transaction);
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({
                success: false,
                error:"NOt Valid ID"
            });
        }


        if (!transaction) {
            res.status(404).json({
                success: false,
                 error:"NOt Valid ID"
                
            })
            await transaction.remove();

            res.status(200).json({
                success: true,
                date: {}
            })
        }
    } catch (error) {
        console.error("Error in delete transaction", error);//Log The Error For Debugging
        return res.status(500).json({
            success: false,
            error: error
        });
    }
}