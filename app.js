const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// defines routes and their ports
const routes = {
  "/orders": "http://orders:3001",
  "/products": "http://products:3002",
  "/": "http://react-front:3000",
};

//create a proxy for each route
for (const route in routes) {
  const target = routes[route];
  app.use(route, createProxyMiddleware({ target }));
}

const PORT = 8000;
app.listen(PORT, () => console.log("API GATEWAY STARTED ON - 8000"));
