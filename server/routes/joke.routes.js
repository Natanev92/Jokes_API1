const JokeController = require("../controllers/joke.controller");
// imported JokeController and created the express routes
module.exports = app => {
  app.get("/api/jokes/", JokeController.findAllJokes);
  app.post("/api/jokes/new", JokeController.createNewJoke);
  app.get("/api/jokes/:id", JokeController.findOneJoke);
  app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
  app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
};
//url naming Conventions in cascading manner