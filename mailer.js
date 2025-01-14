const nodemailer = require('nodemailer');
require('dotenv').config();

const config = {
    service: 'gmail',
    auth: {
        user: process.env.NODEJS_GMAIL_APP_USER,
        pass: process.env.NODEJS_GMAIL_APP_PASSWORD
    }
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async (to, subject, html, attachments = []) => {
    const message = {
        from: process.env.NODEJS_GMAIL_APP_USER, 
        to: to, 
        subject: subject, 
        html: html, 
        attachments: attachments
    };

    try {
        const info = await transporter.sendMail(message);
        console.log("Email sent", info.messageId);
        return info;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = sendEmail;
