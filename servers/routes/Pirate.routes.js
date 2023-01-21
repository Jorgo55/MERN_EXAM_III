const pirateController = require("../controllers/pirate.controller");

module.exports = (app) => {
  app.get("/api/getAllpirates", pirateController.getAllpirates);
  app.post("/api/createpirate", pirateController.createpirate);
  // app.get("/api/getpirate/:id", pirateController.getpirate);
  // app.put("/api/editpirate/:id", pirateController.editpirate);
  app.delete("/api/deletepirate", pirateController.deletepirate);
  // app.delete("/api/deleteOnepirate/:id", pirateController.deleteOnepirate);
};
