import { NextResponse } from "next/server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate"; 


const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

      const { data, error } = await resend.emails.send({
      from: "NareshNB <onboarding@resend.dev>",
      to: ["bhattarain538@gmail.com"],
      subject: subject,
      react: EmailTemplate({ name, email, subject, message }),
    });

  
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
