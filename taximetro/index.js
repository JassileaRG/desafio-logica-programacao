function solucao(min, km) {
    let extraMinutos = 0;
    let extraKilometros = 0;
    
    if (km > 10) {
        extraKilometros = (50 * (km - 10)) + (10 * 70);
    }
    else {
        extraKilometros = 70 * km;
    }
    if (min > 20) {
        extraMinutos = (30 * (min - 20)) + (20 * 50);
    }
    else {
        extraMinutos = 50 * min;
    }
        
    console.log(extraMinutos + extraKilometros)
}

solucao(25, 11.5);