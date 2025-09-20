import { Resend } from "resend";

// Check if the API key is present in environment variables
if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
  throw new Error(
    "API key for Resend is not defined in the environment variables."
  );
}

const apiKey = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export function getApiKey() {
  return apiKey;
}
