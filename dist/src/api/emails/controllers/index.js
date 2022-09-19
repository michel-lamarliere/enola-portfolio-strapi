"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("../../../services/email");
const email_data_1 = require("../../../utils/constants/email-data");
const jwt = require("jsonwebtoken");
const getAuth = async (ctx) => {
    let token;
    try {
        token = await jwt.sign({ data: process.env.ENOLA_PORTFOLIO_JWT_SECRET_DATA }, process.env.ENOLA_PORTFOLIO_JWT_SECRET_KEY);
    }
    catch (error) {
        console.log(error);
        ctx.status = 400;
        ctx.body = { message: "Error during the creation of the token" };
        return;
    }
    ctx.status = 200;
    ctx.body = { token: token };
    return;
};
const submitForm = async (ctx) => {
    const { language, name, email, message } = ctx.request.params;
    const text = {
        messageToClient: {
            french: `Bonjour ${name}, merci pour votre message. Je vous recontacte dès que possible
        <br/>
        Enola Louge
        `,
            english: `Hi ${name}, thank you for your message. I'll get back to you as soon as possible.
     <br/>
        Enola Louge`,
        },
    };
    const sendingEmail = new email_1.Email(email_data_1.ENOLA_EMAIL_DATA);
    sendingEmail.sendEmailToOwner({
        subject: "Contact via formulaire de contact",
        html: `<p>Nom: ${name}</p>
      <p>Adresse mail: ${email}</p>
      <br />
      <p>Message: ${message}</p>
      `,
    });
    sendingEmail.sendEmailToClient({
        to: email,
        subject: "Enola Louge",
        html: language === "french"
            ? text.messageToClient.french
            : text.messageToClient.english,
    });
    ctx.status = 200;
    ctx.body = { message: "successes" };
};
module.exports = {
    getAuth,
    submitForm,
};
