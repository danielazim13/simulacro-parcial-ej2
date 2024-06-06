import express from "express"
import NotasController from "../controllers/notas.controllers.js"


class Router {
    constructor(){
        this.router = express.Router()
        this.controller = new NotasController()
    }

    start(){
        this.router.get("/notas", this.controller.getNotas)
        this.router.get("/notas/promedioTotal", this.controller.getPromedioTotal)
        this.router.get("/notas/cantTotalNotas", this.controller.getCantNotas)
        this.router.get("/notas/cantNotasPorCurso/:curso", this.controller.getCantNotasPorCurso)
        this.router.get("/notas/promedioPorCurso/:curso", this.controller.getPromedioPorCurso)
        this.router.get("/notas/notaMasAlta", this.controller.getNotaMasAlta)
        this.router.get("/notas/notaMasBaja", this.controller.getNotaMasBaja)
        this.router.post("/notas", this.controller.postNota)
        this.router.put("/notas/:id", this.controller.putNota)
        this.router.delete("/notas/:id", this.controller.deleteNota)

        return this.router
    }
}

export default Router