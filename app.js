const express = require ("express");
const app = express();

app.get("/hello", function (req, res) {
  res.send("Merhaba, GET isteği attınız");
  app.use(middleware);
});

app.post("/hello", function (req, res) {
  res.send("Merhaba, POST isteği attınız");
  app.use(middleware);
});

app.put("/hello", function (req, res) {
  res.send("Merhaba, PUT isteği attınız");
  app.use(middleware);
});

app.delete("/hello", function (req, res) {
  res.send("Merhaba, DELETE isteği attınız");
  app.use(middleware);
});

const middleware = function (req, res, next){
  console.log("Yeni bir istek geldi");
  next();
};

app.listen(3000);
