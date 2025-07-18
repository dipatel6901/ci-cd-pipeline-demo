const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Hello from DevOps CI/CD demo!");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
