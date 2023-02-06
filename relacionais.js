let nota1 = 5
let nota2 = 10

console.log(`A nota1 é ${nota1} e a nota2 é ${nota2}`);
console.log(`nota1 * nota2 = ${nota1 * nota2}`)
console.log(`nota1 / nota2 = ${nota1 / nota2}`)
console.log(`nota1 + nota2 = ${nota1 + nota2}`)
console.log(`nota1 - nota2 = ${nota1 - nota2}`)
console.log(`nota1 % nota2 = ${nota1 % nota2}`)
console.log(`nota1 ** nota2 = ${nota1 ** nota2}`)
console.log(`nota1 > nota2 = ${nota1 > nota2}`)
console.log(`nota1 < nota2 = ${nota1 < nota2}`)
console.log(`nota1 >= nota2 = ${nota1 >= nota2}`)
console.log(`nota1 <= nota2 = ${nota1 <= nota2}`)
console.log(`nota1 == nota2 = ${nota1 == nota2}`)
console.log(`nota1 !== nota2 = ${nota1 !== nota2}`)
console.log(`nota1 === nota2 = ${nota1 === nota2}`)

let students = [
    {
        nome: "João da Silva",
        altura: 1.74,
        idade: 21,
        sexo: "masculino",
        sala: "13A",
        matematica: 80
    },
    {
        nome: "Maria da Silva",
        altura: 1.65,
        idade: 23,
        sexo: "feminino",
        sala: "10B",
        matematica: 75
    },
    {
        nome: "Cezar da Silva",
        altura: 1.80,
        idade: 24,
        sexo: "masculino",
        sala: "10A",
        matematica: 98
    },
    {
        nome: "Carlos da Silva",
        altura: 1.64,
        idade: 22,
        sexo: "masculino",
        sala: "8D",
        matematica: 60
    },
    {
        nome: "Anna da Silva",
        altura: 1.75,
        idade: 23,
        sexo: "feminino",
        sala: "9F",
        matematica: 82
    },
]

//Exercício 01
console.table(students);

//Exercício 02
let media = ((students[0].matematica + students[1].matematica + students[2].matematica + students[3].matematica + students[4].matematica) / 5)

console.log(`A média das notas é: ${media}`)

//Exercício 03
if (students[0].matematica >= 70) {
    console.log(`O aluno ${students[0].nome} teve nota de ${students[0].matematica} e foi aprovado!`)
} else {
    console.log(`O aluno ${students[0].nome} teve nota de ${students[0].matematica} e foi reprovado!`)
}

if (students[1].matematica >= 70) {
    console.log(`O aluno ${students[1].nome} teve nota de ${students[1].matematica} e foi aprovado!`)
} else {
    console.log(`O aluno ${students[1].nome} teve nota de ${students[1].matematica} e foi reprovado!`)
}

if (students[2].matematica >= 70) {
    console.log(`O aluno ${students[2].nome} teve nota de ${students[2].matematica} e foi aprovado!`)
} else {
    console.log(`O aluno ${students[2].nome} teve nota de ${students[2].matematica} e foi reprovado!`)
}

if (students[3].matematica >= 70) {
    console.log(`O aluno ${students[3].nome} teve nota de ${students[3].matematica} e foi aprovado!`)
} else {
    console.log(`O aluno ${students[3].nome} teve nota de ${students[3].matematica} e foi reprovado!`)
}

if (students[4].matematica >= 70) {
    console.log(`O aluno ${students[4].nome} teve nota de ${students[4].matematica} e foi aprovado!`)
} else {
    console.log(`O aluno ${students[4].nome} teve nota de ${students[4].matematica} e foi reprovado!`)
}