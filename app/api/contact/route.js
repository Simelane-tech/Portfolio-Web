import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DEFAULT_CONTACT_EMAIL = "kwanele.simelane10536@gmail.com";
const CONTACT_NAME = "Kwanele Simelane";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message, service } = payload;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_EMAIL } = process.env;
    const inboxEmail = CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        {
          message:
            "Email service is not configured yet. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS."
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      connectionTimeout: 10000,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    await transporter.verify();

    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: inboxEmail,
      replyTo: email,
      subject: service ? `Portfolio Contact: ${name} — ${service}` : `Portfolio Contact: ${name}`,
      text: `New message from portfolio contact form.\n\nName: ${name}\nEmail: ${email}${service ? `\nService: ${service}` : ""}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 12px;">New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `
    });

    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: email,
      replyTo: inboxEmail,
      subject: "Thanks for reaching out - message received",
      text: `Hi ${name},\n\nThank you for contacting ${CONTACT_NAME}. Your message has been received successfully.\n\nI will review your request and get back to you shortly.\n\nBest regards,\n${CONTACT_NAME}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <p>Hi ${name},</p>
          <p>
            Thank you for contacting <strong>${CONTACT_NAME}</strong>. Your message has been
            received successfully.
          </p>
          <p>I will review your request and get back to you shortly.</p>
          <p style="margin-top: 20px;">Best regards,<br />${CONTACT_NAME}</p>
        </div>
      `
    });

    return NextResponse.json(
      {
        message: "Message sent successfully. Thank you for reaching out."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      { message: "Unable to process your request right now." },
      { status: 500 }
    );
  }
}
