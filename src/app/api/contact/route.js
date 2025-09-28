import connectDB from "../../library/databaseConnection";
import Contact from "../../models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  // Parse the request body
  const { fullname, email, service, communication, message } = await req.json();

  try {
    // Connect to the database
    await connectDB();

    // Create a new contact entry in the database
    await Contact.create({ fullname, email, service, communication, message });

    // Return a successful response
    return NextResponse.json({
      msg: ["Votre message a été envoyé avec succès"],
      success: true,
    });
  } catch (error) {
    // Handle validation errors (specific to mongoose validation errors)
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      // Handle any other errors
      return NextResponse.json({
        msg: ["Impossible d'envoyer votre message."],
      });
    }
  }
}
