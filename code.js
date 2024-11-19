function ingredientes() {
    return {
        massa: ["farinha", "ovos", "leite", "açúcar"],
        cobertura: ["chocolate", "creme de leite", "açúcar"]
    };
}

function mostrarIngredientes(ingredientes, tipo) {
    return new Promise(resolve => {
        console.log(`Misturando os ingredientes da ${tipo}:`);
        ingredientes.forEach((ing, i) => {
            setTimeout(() => console.log(`➡️ Adicionando: ${ing}`), i * 1000);
        });
        setTimeout(resolve, ingredientes.length * 1000);
    });
}

function misturar(tipo) {
    return new Promise(resolve => {
        let minutos = 1;
        console.log(`🌀 Batendo a ${tipo}...`);
        let intervalo = setInterval(() => {
            console.log(`Batendo: ${minutos} minuto(s)`);
            minutos++;
            if (minutos > 2) clearInterval(intervalo), resolve();
        }, 1000);
    });
}

function assar(tempo) {
    return new Promise(resolve => {
        console.log("Colocando o bolo no forno...");
        let restante = tempo / 1000;
        let intervalo = setInterval(() => {
            console.log(`⏳ Assando: faltam ${restante} segundos`);
            if (--restante <= 0) clearInterval(intervalo), resolve();
        }, 1000);
    });
}

function jogarCobertura() {
    return new Promise(resolve => {
        console.log("🍫 Jogando a cobertura de chocolate...");
        setTimeout(() => {
            console.log("🎂 Cobertura espalhada! Bolo pronto!");
            resolve();
        }, 2000);
    });
}

async function fazerBolo() {
    const { massa, cobertura } = ingredientes();
    await mostrarIngredientes(massa, "massa");
    await misturar("massa");
    await assar(10000);
    await mostrarIngredientes(cobertura, "cobertura");
    await misturar("cobertura");
    await jogarCobertura();
}

fazerBolo();
