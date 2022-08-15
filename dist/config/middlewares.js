"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    "strapi::errors",
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "connect-src": ["'self'", "https:"],
                    "img-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "dl.airtable.com",
                        `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
                    ],
                    "media-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "dl.airtable.com",
                        `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
                    ],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
