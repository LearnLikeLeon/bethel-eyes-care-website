import mongoose from "mongoose";

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      const url = process.env.REACT_APP_DATABASE_URL;

      if (!url) {
        throw new Error(
          "Database connection string (DATABASE_URL) is not defined."
        );
      }

      await mongoose.connect(url);
      console.log("Connecté à la base de donnée");
    }
  } catch (error) {
    console.error(
      "Impossible de se connecter à la base de donnée:",
      error instanceof Error ? error.message : error
    );
  }
};

export default connectDB;
