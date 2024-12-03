import mongoose from "mongoose";

let isConnected = false;

export default async function dbConnect() {
  if (isConnected) return;

  const dbURI = process.env.MONGODB_URI || "your-mongodb-connection-string";

  try {
    const connection = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = connection.connections[0].readyState === 1;
  } catch (error) {
    console.error("Database connection error:", error);
  }
}
