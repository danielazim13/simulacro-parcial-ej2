class NotasModel{
    constructor(){
        this.notas = [
            {
               nombre:"Panchi",
               nota:10,
               curso:"1A"
            },
            {
                nombre:"Lu",
                nota:10,
                curso:"1A"
            },
            {
                nombre:"Tom",
                nota:8,
                curso:"2A"
            },
            {
                nombre:"Agus",
                nota:7,
                curso:"2A"
            },
            {
                nombre:"Cami",
                nota:6,
                curso:"3A"
            },
            {
                nombre:"Sofi",
                nota:5,
                curso:"3A"
            },
            {
                nombre:"Iru",
                nota:4,
                curso:"3A"
            },
        ]
    }

    getNotas = async () => {
        return this.notas
    }

    getPromedioTotal = () => {
        let sumaTotal = 0
        this.notas.forEach(notaActual => {
            sumaTotal += notaActual.nota
        });

        let promedio = sumaTotal / this.notas.length
        
        return promedio
    }

    getCantNotas = () => {
        let contador = 0

        this.notas.forEach(notaActual => {
            if(notaActual.nota != null){
                contador ++
            }
        });

        return contador
    }

    getCantNotasPorCurso = (curso) => {
        let cont = 0
        this.notas.forEach(notaActual => {
            if(notaActual.curso == curso){
                cont ++
            }
        });

        return cont
    }

    getPromedioPorCurso = (curso) => {
        let suma = 0
        let cant = 0
        this.notas.forEach(notaActual => {
            if(notaActual.curso == curso){
                suma += notaActual.nota
                cant ++
            }
        });

        return suma/cant
    }

    getNotaMasAlta = () => {
        let mayorNota = -1
        let aluMayorNota = null

        this.notas.forEach(notaActual => {
            if(notaActual.nota > mayorNota){
                mayorNota = notaActual.nota
                aluMayorNota = notaActual
            }
        });

        return {mayorNota, aluMayorNota}
    }

    getNotaMasBaja = () => {
        let menorNota = 1000
        let aluMenorNota = null

        this.notas.forEach(notaActual => {
            if(notaActual.nota < menorNota){
                menorNota = notaActual.nota
                aluMenorNota = notaActual
            }
        });

        return {menorNota, aluMenorNota}
    }

    postNota = (data) => {
        data.id = this.notas.length + 1
        this.notas.push(data)
        return data
    }

    putNota = (id, data) => {
        data.id = id
        const index = this.notas.findIndex((nota) => nota.id == id)
        this.notas.splice(index, 1, data)
        return data
    }

    patchNota = (id, data) => {
        const index = this.notas.findIndex((n) => n.id == id)
        const oldNota = this.notas[index]
        console.log("old: ", oldNota);
        const newNota = { ...oldNota, ...data}
        console.log("new: ", newNota);
        this.notas.splice(index, 1, newNota)
        return newNota
    }

    deleteNota = (id) => {
        const index = this.notas.findIndex((nota) => nota.id == id)
        if(index === -1){
            throw new Error("El ID no existe!!!")
        } else {
            this.notas.splice(index, 1)
        }

        return "OK."
    }


}

export default NotasModel




