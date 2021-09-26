
let aluno = {
    nome: "Isaque",
    notas:[Number (prompt("Sua primeira nota")),Number (prompt("Sua segunda nota"))]

}
function notas(n1,n2){
    return (n1 + n2) / 2;
}

let result = notas(aluno.notas[0],aluno.notas[1])
console.log(parseFloat(result));