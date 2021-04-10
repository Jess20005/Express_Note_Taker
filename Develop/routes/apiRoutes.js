const notesData = require("../db/db.json");
const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(notesData);
    // console.log (notesData)
  });

  app.post("/api/notes", (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware

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
};
//uuid package install with v4 add id note before line16
