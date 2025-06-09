import mongoose from "mongoose";
export const database = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI, []);
        console.log("Mongodb is coonected", connection.host)
    } catch (error) {
        console.error("mongo is not connected")
    }
}
