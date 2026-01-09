const jsonServer = require("json-server");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Middleware to generate random ID
server.post("/users", (req, res, next) => {
  req.body.id = uuidv4().slice(0, 4);
  next();
});

server.post("/jobs", (req, res, next) => {
  req.body.id = uuidv4().slice(0, 4);
  next();
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT} 🚀`);
});
