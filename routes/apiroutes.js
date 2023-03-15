const router = require("express").Router()
const fs = require("fs")
const database = require("../db/db.json")
router.get("/notes",(req,res)=>{
    console.log("api route test")
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.json(JSON.parse(data))
      });
})
router.post("/notes",(req,res)=>{
    console.log("this is api post route")
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        let currentNotes = JSON.parse(data)
    currentNotes.push(req.body)
        console.log("this is from currentNotes",currentNotes)
        fs.writeFile('./db/db.json', JSON.stringify(currentNotes), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
            res.json({message: "Your note has been added!"})
          });
      });
})

module.exports = router
