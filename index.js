const http = require("http");

const PORT = 3000;

const cast = [
  {
    id: 0,
    actor: "Rob Steward",
    character: "Nick Slaughter",
  },
  {
    id: 1,
    actor: "Carolyn Dunn",
    character: "Sylvie Girard",
  },
  {
    id: 2,
    actor: "Ian Tracey",
    character: "Spider Garvin",
  },
  {
    id: 3,
    actor: "Ari Sorco-Ram",
    character: "Stg. Gregory",
  },
  {
    id: 4,
    actor: "Eugene Clark",
    character: "Ollie Porter",
  },
];

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "POST" && items[1]) {
  }

  if (req.method === "GET") {
    const items = req.url.split("/").filter((val) => val !== "");

    res.statusCode = 200;
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.write("<html>");
    res.write("<head>");
    res.write("<title>Tropical Heat TV series info</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Tropical Heat TV Series</h1>");
    if (items.length === 0) {
      res.write(`Add "/cast" to url to see full cast or /cast/0-4
      to see each individual actor and their character`);
      // res.setHeader("Content-Type", "application/json");
      // res.end(JSON.stringify(cast));
    } else if (items.length === 1 && items[0] === 'cast') {
      res.write('<h2>Cast</h2>');
      res.write(JSON.stringify(cast));
    } else if (items.length === 2 && items[0] === 'cast'
      && +items[1]<cast.length){
        res.write(`<h2>${cast[items[1]].character}</h2>`);
        res.write(`<h2>Played by: ${cast[items[1]].actor}</h2>`);
    } else {
      res.statusCode = 404;
      res.write('<h1>Ooops! You sunk the boat, page not found bro!</h1>');
    }

    res.write("</body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log("listening on port 3000");
});
