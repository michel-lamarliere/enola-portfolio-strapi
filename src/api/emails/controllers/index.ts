import { Email } from "../../../services/email";
import { ENOLA_EMAIL_DATA } from "../../../utils/constants/email-data";

const jwt = require("jsonwebtoken");

const getAuth = async (ctx) => {
  let token;

  try {
    token = await jwt.sign(
      { data: process.env.ENOLA_PORTFOLIO_JWT_SECRET_DATA },
      process.env.ENOLA_PORTFOLIO_JWT_SECRET_KEY
    );
  } catch (error) {
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
  const { language, name, email, message } = ctx.request.body;

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

  const sendingEmail = new Email(ENOLA_EMAIL_DATA);

  try {
    await sendingEmail.sendEmailToOwner({
      subject: "Contact via formulaire de contact",
      html: `<p>Nom: ${name}</p>
      <p>Adresse mail: ${email}</p>
      <br />
      <p>Message: ${message}</p>
      `,
    });
  } catch (error) {
    ctx.status = 400;
    ctx.body = {
      message: "An error occurred when sending an email to the client.",
    };
  }

  try {
    const test = await sendingEmail.sendEmailToClient({
      to: email,
      subject: "Enola Louge",
      html:
        language === "french"
          ? text.messageToClient.french
          : text.messageToClient.english,
    });

    console.log(test);
  } catch (error) {
    ctx.status = 400;
    ctx.body = {
      message: "An error occurred when sending an email to the client.",
    };
  }

  ctx.status = 200;
  ctx.body = { message: "success" };
};

module.exports = {
  getAuth,
  submitForm,
};
