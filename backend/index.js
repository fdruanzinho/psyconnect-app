const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Backend rodando 🚀");
});

server.listen(8000, () => {
  console.log("Servidor rodando na porta 8000");
});