import mongoose from "mongoose";

const connectionString = "mongodb+srv://20z213:admin@cluster0.izc46dq.mongodb.net/?retryWrites=true&w=majority";

export const connectToServer = (callback) => {
    mongoose
        .connect(connectionString, {})
        .then(() => {
            console.log("Connected to MongoDB");
            return callback();
        })
        .catch((err) => {
            console.log(err);
            return callback(err);
        });

};