const express = require("express")
const apiroutes = require("./public/api/apiroutes")

const app = express()
const PORT = process.env.PORT || 3002
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/api",apiroutes)
app.listen(PORT, ()=>console.log("apprunning"))
