const router = require("express").Router()
const fs = require("fs")
const database = require("../db/db.json")
const { v4: uuidv4 } = require('uuid');
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
router.delete("/notes/:id",(req,res)=>{
    console.log("delete route")
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        let currentNotes = JSON.parse(data) || []
        console.log("this is from currentNotes",currentNotes)
        let tempNotesList = []
        for (let index = 0; index < currentNotes.length; index++) {
          if(currentNotes[index].id != req.params.id){
            tempNotesList.push(currentNotes[index])
          }
        }
        fs.writeFile('./db/db.json', JSON.stringify(tempNotesList), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
           // res.json({message: "Your note has been added!"})
          });
          res.json(tempNotesList)
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
      let note = req.body
      note.id = uuidv4()
  currentNotes.push(note)
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
