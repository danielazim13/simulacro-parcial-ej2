import NotasServices from "../services/notas.services.js"

class NotasController {
    constructor(){
        this.services = new NotasServices()
    }

    getNotas = async (req, res) => {
        const notas = await this.services.getNotas()
        res.send(notas)
    }

    getPromedioTotal = async (req, res) => {
        const promedioTotal = await this.services.getPromedioTotal()
        res.send({promedioTotal})
    }

    getCantNotas = async (req, res) => {
        const cantTotalNotas = await this.services.getCantNotas()
        res.send({cantTotalNotas})
    }

    getCantNotasPorCurso = async (req, res) => {
        const {curso} = req.params
        const cantNotasPorCurso = await this.services.getCantNotasPorCurso(curso)
        res.send({cantNotasPorCurso})
    }

    getPromedioPorCurso = async (req, res) => {
        const {curso} = req.params
        const promedioPorCurso = await this.services.getPromedioPorCurso(curso)
        res.send({promedioPorCurso})
    }

    getCantNotas = async (req, res) => {
        const cantTotalNotas = await this.services.getCantNotas()
        res.send({cantTotalNotas})
    }

    getNotaMasAlta = async (req, res) => {
        const notaMasAlta = await this.services.getNotaMasAlta()
        res.send({notaMasAlta})
    }

    getNotaMasBaja = async (req, res) => {
        const notaMasBaja = await this.services.getNotaMasBaja()
        res.send({notaMasBaja})
    }

    postNota = (req, res) => {
        const nuevaNota = req.body
        const nota = this.services.postNota(nuevaNota)
        res.send(nota)
    }
}

export default NotasController