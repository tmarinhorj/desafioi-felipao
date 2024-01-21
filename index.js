// Declaração das variáveis
let nome = "Júnior";
let xp = 10000;

// Switch case para classificação de nível
switch (xp) {
  case (xp < 1000):
    // Nível Ferro
    nivel = "Ferro";
    break;
  case (xp >= 1001 && xp <= 2000):
    // Nível Bronze
    nivel = "Bronze";
    break;
  case (xp >= 2001 && xp <= 5000):
    // Nível Prata
    nivel = "Prata";
    break;
  case (xp >= 5001 && xp <= 7000):
    // Nível Ouro
    nivel = "Ouro";
    break;
  case (xp >= 7001 && xp <= 8000):
    // Nível Platina
    nivel = "Platina";
    break;
  case (xp >= 8001 && xp <= 9000):
    // Nível Ascendente
    nivel = "Ascendente";
    break;
  case (xp >= 9001 && xp <= 10000):
    // Nível Imortal
    nivel = "Imortal";
    break;
  default:
    // Nível Radiante
    nivel = "Radiante";
    break;
}

// Saída
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
