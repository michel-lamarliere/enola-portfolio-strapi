"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENOLA_EMAIL_DATA = void 0;
exports.ENOLA_EMAIL_DATA = {
    host: process.env.ENOLA_PORTFOLIO_HOST,
    port: +process.env.ENOLA_PORTFOLIO_PORT,
    secure: process.env.ENOLA_PORTFOLIO_SECURE === "true",
    user: process.env.ENOLA_PORTFOLIO_USER,
    password: process.env.ENOLA_PORTFOLIO_PASSWORD,
};
