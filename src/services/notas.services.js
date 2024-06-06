import NotasModel from "../models/notas.models.js"

class NotasServices{
    constructor(){
        this.model = new NotasModel()
    }

    getNotas = async () => {
        const notas = await this.model.getNotas()
        return notas
    }

    getPromedioTotal = () => {
        const promedioTotal = this.model.getPromedioTotal()
        return promedioTotal
    }

    getCantNotas = async () => {
        const cant = await this.model.getCantNotas()
        return cant
    }

    getCantNotasPorCurso = async (curso) => {
        const cant = await this.model.getCantNotasPorCurso(curso)
        return cant
    }

    getPromedioPorCurso = async (curso) => {
        const promedio = await this.model.getPromedioPorCurso(curso)
        return promedio
    }

    getNotaMasAlta = () => {
        const masAlta = this.model.getNotaMasAlta()
        return masAlta
    }

    getNotaMasBaja = () => {
        const masBaja = this.model.getNotaMasBaja()
        return masBaja
    }

    postNota = (nota) => {
        const nuevaNota = this.model.postNota(nota)
        return nuevaNota
    }

    putNota = (id, data) => {
        const nuevaNota = this.model.putNota(id, data)
        return nuevaNota
    }

    deleteNota = (id) => {
        const nota = this.model.deleteNota(id)
        return nota
    }
    
}

export default NotasServices