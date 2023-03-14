const router = require("express").Router()
const database = require("../../db/db.json")
router.get("/notes",(request,response)=>{
    console.log(request)
    response.json({"title":"test"})
})
router.post("/notes",(request,response)=>{})
router.delete("/notes",(request,response)=>{})

module.exports = router
