import { Router } from "express";

const router = Router();

/**
 * Product Routes
 */

router.get("/product", (req, res) => {
  res.send("<h1>Home Page</h1>");
  res.status(200);
});

router.get("/product/:id", (req, res) => {
  res.send(`<h1>Product Page ${req.params.id}</h1>`);
  res.status(200);
});

router.put("/product/:id", (req, res) => {
  res.send(`<h1>Product Page ${req.params.id}</h1>`);
  res.status(200);
});

router.post("/product", (req, res) => {
  res.send("<h1>Product Page</h1>");
  res.status(200);
});

router.delete("/product/:id", (req, res) => {
  res.send(`<h1>Product Page ${req.params.id}</h1>`);
  res.status(200);
});

/**
 * Update Routes
 */

router.get("/update", (req, res) => {
  res.send("<h1>Home Page</h1>");
  res.status(200);
});

router.get("/update/:id", (req, res) => {
  res.send(`<h1>Product Page ${req.params.id}</h1>`);
  res.status(200);
});

router.put("/update/:id", (req, res) => {
  res.send(`<h1>Product Page ${req.params.id}</h1>`);
  res.status(200);
});

router.post("/update", (req, res) => {
  res.send("<h1>Product Page</h1>");
  res.status(200);
});

router.delete("/update/:id", (req, res) => {
  res.send(`<h1>Product Page ${req.params.id}</h1>`);
  res.status(200);
});

/**
 * Update Points Routes
 */

router.get("/updatepoint", (req, res) => {
  res.send("<h1>Home Page</h1>");
  res.status(200);
});

router.get("/updatepoint/:id", (req, res) => {
  res.send(`<h1>Product Page ${req.params.id}</h1>`);
  res.status(200);
});

router.put("/updatepoint/:id", (req, res) => {
  res.send(`<h1>Product Page ${req.params.id}</h1>`);
  res.status(200);
});

router.post("/updatepoint", (req, res) => {
  res.send("<h1>Product Page</h1>");
  res.status(200);
});

router.delete("/updatepoint/:id", (req, res) => {
  res.send(`<h1>Product Page ${req.params.id}</h1>`);
  res.status(200);
});

export default router;
