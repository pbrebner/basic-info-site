const express = require("express");
const app = express();
const port = 8080;

app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile("./index.html");
});

app.get("/about", function (req, res) {
    res.sendFile(`${__dirname}/about.html`);
});

app.get("/contact-me", function (req, res) {
    res.sendFile(`${__dirname}/contact-me.html`);
});

app.use((req, res, next) => {
    res.status(404).sendFile(`${__dirname}/404.html`);
});

app.listen(port, () =>
    console.log(`Server is running and listening on ${port}`)
);
