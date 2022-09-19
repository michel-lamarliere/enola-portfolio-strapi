module.exports = {
    routes: [
        {
            method: "GET",
            path: "/auth",
            handler: "index.getAuth",
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: "POST",
            path: "/form",
            handler: "index.submitForm",
            config: {
                policies: [],
                auth: false,
            },
        },
    ],
};
