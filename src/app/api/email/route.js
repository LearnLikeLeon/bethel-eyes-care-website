import { Email } from "../email/Email";
import { NextResponse } from "next/server";
import { getApiKey } from "../../library/emailConnection";

// POST function to handle email sending
export async function POST(request) {
  // Get API key for sending emails
  const emailNotification = getApiKey();

  try {
    // Parse the JSON body from the request
    const body = await request.json();

    // Build the email content using the React Email component
    const emailContent = Email({
      fullname: body.fullname,
      email: body.email,
      service: body.service,
      communication: body.communication,
      message: body.message,
    });

    // Send the email via the email API
    const { data, error } = await emailNotification.emails.send({
      from: "Contactez-nous <form@womengreencloud.com>",
      to: "devgreencloud@gmail.com",
      subject: "Vous avez reçu une nouvelle soumission via votre site internet",
      react: emailContent,
    });

    // Return the response with the email API data
    return NextResponse.json({ data });
  } catch (error) {
    console.log("error", error);

    // Return error response if something goes wrong
    return NextResponse.json({
      error,
    });
  }
}
