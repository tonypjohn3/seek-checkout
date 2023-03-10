import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: ".env" });

export const connectDb = () => {
  mongoose.connect(process.env.MONGODB_URI_LOCAL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
}