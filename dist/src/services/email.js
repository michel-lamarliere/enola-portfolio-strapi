"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const nodemailer = require("nodemailer");
class Email {
    constructor(params) {
        this.host = params.host;
        this.port = params.port;
        this.secure = params.secure;
        this.auth = {
            user: params.user,
            pass: params.password,
        };
    }
    createNodemailerTransporter() {
        return nodemailer.createTransport({
            host: this.host,
            port: this.port,
            secure: this.secure,
            auth: this.auth,
        });
    }
    /*async sendEmail(params: EmailParams) {
          const { to, subject, text, html } = params;
          const transporter = this.createNodemailerTransporter();
      }*/
    async sendEmailToOwner(params) {
        const { subject, text, html } = params;
        const transporter = this.createNodemailerTransporter();
        try {
            await transporter.sendMail({
                from: this,
                to: this.auth.user,
                subject: subject,
                text: text,
                html: html,
            });
        }
        catch (error) {
            return false;
        }
        return true;
    }
    async sendEmailToClient(params) {
        const { to, subject, text, html } = params;
        const transporter = this.createNodemailerTransporter();
        try {
            await transporter.sendMail({
                from: this.auth.user,
                to: to,
                subject: subject,
                text: text,
                html: html,
            });
        }
        catch (error) {
            return false;
        }
        return true;
    }
}
exports.Email = Email;
