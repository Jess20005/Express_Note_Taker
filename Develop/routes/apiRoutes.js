const notesData = require("../db/db.json");
const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(notesData);
    // console.log (notesData)
  });

  app.post("/api/notes", (req, res) => {
    notesData.push(req.body);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notesData),
      function (err) {
        if (err) throw err;
        res.json(notesData);
      }
    );
  });

  app.get("/api/notes/:id", (req, res) => {
    res.json(notesData[req.params.id]);
  });

  app.delete("/api/notes/:id", (req, res) => {
    notesData.splice(req.params.id, 1);
  });
  fs.writeFile(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesData),
    function (err) {
      if (err) throw err;
      return true;
    }
  );
};
//uuid package install with v4 add id note before line16
