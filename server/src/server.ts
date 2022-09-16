import express, { request, response } from "express";

const app = express();

// HTTP methods / API RESTful / HTTP Codes .status(200)

/**
 * Query: ... localhost:3333/ads?page=2&sort=title
 * Route: ... localhost:3333/ads/5
 *            localhost:3333/post/como-criar-uma-api-node
 * Body: ...  envio de formulario, criacao de usuario, informacao sensiveis
 */

// 1 - listagem de games com contagem de anuncios
app.get("/games", (request, response) => {
  return response.json([]);
});

// 2 - Criacao de anuncio
app.post("/ads", (request, response) => {
  return response.status(201).json([]);
});

// 3 - Listagem de anuncios por game
app.get("/games/:id/ads", (request, response) => {
  // const gameId = request.params.id;

  return response.json([
    { id: 1, name: "Anuncio 1" },
    { id: 2, name: "Anuncio 2" },
  ]);
});

// 4 - Buscar discord pelo ID do anuncio
app.get("/ads/:id/discord", (request, response) => {
  // const adId = request.params.id;

  return response.json([]);
});

app.listen(3333);
