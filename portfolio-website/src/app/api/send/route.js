// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const body = req.body;
  console.log(body)

  const { email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      // from: "Hanni <onboarding@resend.dev>",
      from: email,
      to: ["cho.josh98@gmail.com"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
