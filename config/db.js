import mongoose from "mongoose"
export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(`mongodb+srv://users:Anshu123@cluster0.h4oto.mongodb.net/school?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connection success!!`);
      } catch (error) {
        console.log(error);
      }
}