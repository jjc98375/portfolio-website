// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {

  const body = await request.json();
  console.log(body);
  const { email, subject, message } = body;

  console.log(email, subject, message)

  try {
    const data = await resend.emails.send({
      from: "Future Employer <onboarding@resend.dev>",
      to: ["cho.josh98@gmail.com"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>From this email: {email}</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
