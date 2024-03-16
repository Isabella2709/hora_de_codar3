function divval() {
  let n1 = parseInt(prompt("Informe um valor"));
  let n2 = parseInt(prompt("Informe outro: "));

  if (n2 <= 0) {
    document.getElementById("mostravalor1").innerHTML =
      "Valor invalido, digite um valor acima de 0, o valor não pode ser negativo";
  } else if (n2 >= 1) {
    let divisao = n1 / n2;
    document.getElementById("mostravalor1").innerHTML =
      "A divisão entre os numeros positivos é: " + divisao;
  }
}

function explosao() {
  let cont = [
    30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12,
    11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
  ];
  let text = "";

  for (let i = 0; i < cont.length; i++) {
    document.getElementById("mostrakaboom").innerHTML = text +=
      cont[i] + "<br/>" + "vai explodir em: ";
    document.getElementById("kaboom").innerHTML = " Kaboomm";
  }
}

function contregr() {
  let cont = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  let text = "";

  for (let i = 0; i < cont.length; i++) {
    document.getElementById("mostracontregr").innerHTML = text +=
      cont[i] + "<br />" + "contagem em : 0";
  }
}

function mediar() {
  let soma = 0;
  let quantidade = 0;

  for (let i = 15; i <= 100; i++) {
    soma += i;
    quantidade++;
  }

  const media = soma / quantidade;

  document.getElementById("mostramedia").innerHTML =
    "A media entre os numeros é igual: " + media;
}

function medtodos() {
  let n1 = parseInt(prompt("Digite um numero: "));
  let n2 = parseInt(prompt("Digite outro numero: "));

  let numerosentre = [];

  for (var i = n1 + 1; i < n2; i++) {
    numerosentre.push(i);
  }

  let soma = n1 + n2;
  for (let i = 0; i < numerosentre.length; i++) {
    soma += numerosentre[i];
  }

  let media = soma / (numerosentre.length + 2);

  document.getElementById("mostramedtodos").innerHTML =
    "A media entre os numeros é: " + media;
}

function mediaaluno() {
  let nota1 = parseFloat(prompt("Digite a primeira nota: "));
  let nota2 = parseFloat(prompt("Digite a segunda nota: "));

  let calc = prompt(
    "Você quer calcular media de aluno? (S - para sim / N para não)"
  );
  calc.toUpperCase();

  let mediaaluno = (nota1 + nota2) / 2;

  if (calc == "S") {
    if (mediaaluno >= 9.5 && mediaaluno <= 10.0) {
      document.getElementById("mostramediadoaluno").innerHTML =
        "Esse aluno está aprovado";
    } else {
      document.getElementById("mostramediadoaluno").innerHTML =
        "Esse aluno está reprovado";
    }
  } else if (calc == "N") {
    document.getElementById("mostramediadoaluno").innerHTML =
      "Você optou por não calcular a média.";
  } else {
    document.getElementById("mostramediadoaluno").innerHTML =
      "Opção inválida. Digite 'S' para sim ou 'N' para não.";
  }
}

function avaliacaometod() {
  let nota1 = parseInt(prompt("Digite a primeira nota: "));
  let nota2 = parseInt(prompt("Digite a segunda nota: "));
  let nota3 = parseInt(prompt("Digite a terceira nota: "));
  let nota4 = parseInt(prompt("Digite a quarta nota: "));
  let nota5 = parseInt(prompt("Digite a quinta nota: "));
  let nota6 = parseInt(prompt("Digite a sexta nota: "));

  let notas = [nota1, nota2, nota3, nota4, nota5, nota6];

  let somanot = 0;
  for (let i = 0; i < notas.length; i++) {
    somanot += notas[i];
  }

  let media = somanot / notas.length;

  if (media < 0 || media > 10) {
    document.getElementById("mostraalunmd").innerHTML =
      "Nota invalida, digite uma de 0 a 10";
  } else {
    document.getElementById("mostraalunmd").innerHTML =
      " A media desse aluno é: " + media.toFixed(2);
  }
}

function numerosentren() {
  let n = parseInt(prompt("Digite um numero: "));
  let resultado = "";

  for (let i = 1; i <= n; i++) {
    resultado += i + "  Os numeros anteriores a: " + n + "<br>";
  }

  document.getElementById("mostraosnum").innerHTML = resultado;
}

function maiscem() {
  let text = "";

  for (let i = 101; i < 111; i++) {
    text += "Os 10 numeros maiores que cem: " + i + "<br>";
  }

  document.getElementById("mostramior").innerHTML = text;
}

function tabuada() {
  let n = parseInt(prompt("Digite o numero qual você quer a tabuada: "));
  let text = "";

  for (let c = 1; c <= 10; c++) {
    text +=
      "A tabuada do: " + n + " vezez " + c + " é igual a: " + n * c + "<br>";
  }

  document.getElementById("mostratab").innerHTML = text;
}

function valores() {
  n1 = parseInt(prompt("Digite um valor: "));
  n2 = parseInt(prompt("Digite outro valor: "));
  n3 = parseInt(prompt("Digite outro valor: "));
  n4 = parseInt(prompt("Digite outro valor: "));
  n5 = parseInt(prompt("Digite outro valor: "));
  n6 = parseInt(prompt("Digite outro valor: "));
  n7 = parseInt(prompt("Digite outro valor: "));
  n8 = parseInt(prompt("Digite outro valor: "));
  n9 = parseInt(prompt("Digite outro valor: "));
  n10 = parseInt(prompt("Digite outro valor: "));

  let valores = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];

  let dentroint = 0;
  let foraint = 0;
  let text = "";

  for (let i = 0; i < valores.length; i++) {
    if (valores[i] >= 24 && valores[i] <= 42) {
      dentroint++;
    } else {
      foraint++;
    }

    document.getElementById("mostraquantdentro").innerHTML =
      "Numeros digitados dentro do intervalo: " + dentroint;
    document.getElementById("mostraquantfora").innerHTML =
      "Numeros digitados fora: " + foraint;
  }
}
