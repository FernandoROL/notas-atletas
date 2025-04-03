// Array de atletas provido pelo curso -- use o mesmo template de objeto
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

console.log("---------- App para calculo de média de notas: ----------\n\n")

atletas.forEach(atleta => {
    let notas = atleta.notas
    let notasComputadas = notas.sort((a, b) => a - b)
    notasComputadas.shift()
    notasComputadas.pop()
    let atletaMedia = (notasComputadas.reduce((nota1, nota2) => nota1 + nota2) / notasComputadas.length)

    console.log("Atleta: ", atleta.nome)
    console.log("Notas Obtidas", atleta.notas.join(', '))
    console.log("Média Válida", atletaMedia.toFixed(2))
    console.log("\n")
})