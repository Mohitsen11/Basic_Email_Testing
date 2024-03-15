// import nodemailer first
const nodemailer = require('nodemailer');

const dotenv = require('dotenv');

dotenv.config();

async function sendEmail(){

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASS // create the app password ( go to settings do 2FA and create app password (16 char long))
        }
    });

    const mailOption = {
        from: senders_email,
        to: process.env.RECIPIENT_EMAILS, // you can use [] array for sending email to multiple recipients
        subject: what_is_subject_of_mail,
        text: what_is_the_message
    }

    // use try catch while sending the email because error can occur
    try {
        const response = await transporter.sendMail(mailOption);
        console.log("Email is sent successfully");
        console.log(response);
    } catch (error) {
        console.log('Error occurred while sending the email : ', error);
    }
}

// now call the sendEmail function 
sendEmail();
