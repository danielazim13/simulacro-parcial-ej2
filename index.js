import express from "express"
import Router from "./src/routes/notas.routes.js"

const PORT = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", new Router().start())

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))
app.on("Error", (error) => console.log(`Server error: ${error}`))