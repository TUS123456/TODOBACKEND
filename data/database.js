import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("connectDB", {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
