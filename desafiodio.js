let herois = [
    { nome: "Arthas", xp: 7500 },
    { nome: "Jaina", xp: 1500 },
    { nome: "Thrall", xp: 9500 },
    { nome: "Illidan", xp: 12000 }
];

for (let heroi of herois) {
    let nivel = "";

    if (heroi.xp < 1000) {
        nivel = "Ferro";
    } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
