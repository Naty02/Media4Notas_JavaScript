const n1 = Number(prompt("Nota 1:"));
const n2 = Number(prompt("Nota 2:"));
const n3 = Number(prompt("Nota 3:"));
const n4 = Number(prompt("Nota 4:"));

let algumNumeroInvalido =
    n1 < 0 || n1 > 10 ||
    n2 < 0 || n2 > 10 ||
    n3 < 0 || n3 > 10 ||
    n4 < 0 || n4 > 10;

if (algumNumeroInvalido) {
    alert("Digite somente números entre 0.0 e 10.0.");
} else {
    const media = (n1 + n2 + n3 + n4) / 4;

    let resultado;
    if (media < 5) {
        resultado = "Reprovado";
    } else if (media < 6) {
        resultado = "Em recuperação";
    } else {
        resultado = "Aprovado";
    }

    alert(`Você ficou com média ${media}. Resultado: ${resultado}`);
}