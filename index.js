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
    character: "",
  },
  {
    id: 4,
    actor: 'Eugene Clark',
    character:'Ollie Porter'
  }
];

const server = http.createServer();

server.on('request', (req,res) => {
  const items = req.url.split('/');
  if (items.length == 2) {
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });

    //same functionality as commented code, just different calls.
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify(cast)
    );
  } else if (items.length === 3) {
    let movieCharacter = +items[2];
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Tropical Heat TV series info</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Tropical Heat TV Series</h1>");
    res.write(`<h2>${cast[movieCharacter].character}</h2>`);
    res.write(`<h2>Played by: ${cast[movieCharacter].actor}</h2>`);
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
