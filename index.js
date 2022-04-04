const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/MC") {
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });

    //same functionality as commented code, just different calls.
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        name: "Nick Slaughter",
        type: "private detective",
      })
    );
  } else if (req.url==='/') {
    res.writeHead(200, {
        "Content-Type": "text/html",
    });
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Tropical Heat TV series info</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Tropical Heat TV Series</h1>");
    res.write("<h2>Main characters</h2>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
      res.statusCode = 404;
      res.end();
  }
});

server.listen(PORT, () => {
  console.log("listening on port 3000");
});
