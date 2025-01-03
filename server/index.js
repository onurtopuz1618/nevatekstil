// server/index.js

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(bodyParser.json());

// POST /api/contact
app.post("/api/contact", async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Nodemailer ile e-posta gönderme işlemi
  try {
    const transporter = nodemailer.createTransport({
      host: "host110.ni.net.tr", // SMTP sunucu adresinizi buraya yazın
      port: 465,
      secure: true,
      auth: {
        user: "info@nevatekstil.com",
        pass: "Oxk{9^$U}0I%VX!nQYOc2m6e",
      },
      tls: {
        rejectUnauthorized: false,  // Sertifika sorunlarını göz ardı eder
      },
    });

    await transporter.sendMail({
      from: `"Neva Tekstil" <info@nevatekstil.com>`,
      to: "info@nevatekstil.com",
      subject: "Yeni İletişim Formu Talebi",
      text: `İsim: ${name}\nTelefon: ${phone}\nMesaj: ${message}`,
    });

    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// Export Middleware
module.exports = app;