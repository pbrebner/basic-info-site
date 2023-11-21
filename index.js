const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const file = q.pathname === "/" ? "./index.html" : `.${q.pathname}.html`;

    const page404 = fs.readFileSync("404.html", "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        return data;
    });

    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(page404);
            return res.end();
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);
