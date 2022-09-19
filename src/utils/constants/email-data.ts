import { NodemailerEmailParams } from "src/types/nodemailer-email-params";

export const ENOLA_EMAIL_DATA: NodemailerEmailParams = {
  host: process.env.ENOLA_PORTFOLIO_HOST!,
  port: +process.env.ENOLA_PORTFOLIO_PORT!,
  secure: process.env.ENOLA_PORTFOLIO_SECURE! === "true",
  user: process.env.ENOLA_PORTFOLIO_USER!,
  password: process.env.ENOLA_PORTFOLIO_PASSWORD!,
};
