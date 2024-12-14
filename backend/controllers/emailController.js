const nodemailer = require('nodemailer');
require('dotenv').config({ path: './password.env' });


exports.sendEmail = async (req, res) => {
    const { name, email, company, subject, message } = req.body;

    // Konfigurasi Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'heydarpejaten@gmail.com', // Email tujuan
        subject: subject,
        text: `Name: ${name}, \nEmail: ${email}\nCompany: ${company}, \nsubject: ${subject}, \nMessage: ${message}`,
    };
    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
};