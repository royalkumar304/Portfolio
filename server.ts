import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Contact API
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing Gmail credentials in environment variables.");
      return res.status(500).json({ 
        error: "Contact form is not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD in AI Studio Secrets." 
      });
    }

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `🚀 ${subject} (from ${name})`,
      text: `You have received a new message from your portfolio contact form.\n\n` +
            `--------------------------------------------------\n` +
            `Name:    ${name}\n` +
            `Email:   ${email}\n` +
            `Subject: ${subject}\n` +
            `--------------------------------------------------\n\n` +
            `Message:\n${message}\n\n` +
            `--------------------------------------------------\n` +
            `Reply to this email to contact ${name} directly.`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #2563eb; padding: 20px; color: white; text-align: center;">
            <h2 style="margin: 0;">${subject}</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff; color: #1e293b;">
            <p style="margin-top: 0;"><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
            <p style="font-size: 12px; color: #64748b;">This message was sent via your portfolio website contact form.</p>
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: "Message sent successfully!" });
    } catch (error) {
      console.error("Nodemailer error:", error);
      res.status(500).json({ error: "Failed to send message. Check your GMAIL_APP_PASSWORD." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
