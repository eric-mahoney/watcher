// imports
const express = require("express");
const fetch = require("node-fetch");
const config = require("../config");

const app = express();
app.listen(3000, () => console.log("listening"));
app.use(express.static("public"));

app.get("/movie/:id", async (request, response) => {
  const id = request.params.id;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.KEY}&language=en-US`;
  console.log(url);
  const fetchRequest = await fetch(url);
  const json = await fetchRequest.json();
  response.json(json);
});

app.get("/title/:title", async (request, response) => {
  const title = request.params.title.replace(" ", "+");
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${config.KEY}&query=${title}`;
  console.log(url);
  const fetchRequest = await fetch(url);
  const json = await fetchRequest.json();
  response.json(json);
});

app.get("/popular", async (request, response) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${config.KEY}&language=en-US&page=1`;
  const fetchRequest = await fetch(url);
  const json = await fetchRequest.json();
  response.json(json);
});

app.get("/recent", async (request, response) => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.KEY}&language=en-US&page=1`;
  const fetchRequest = await fetch(url);
  const json = await fetchRequest.json();
  response.json(json);
});
