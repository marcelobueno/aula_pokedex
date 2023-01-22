const url = 'https://pokeapi.co/api/v2/pokemon/';
var result;

const buscar = () => {

    let pokemon = 150;

    fetch(url + pokemon)
    .then((res) => {
        return res.json();
    })
    .then((poke) => {
        atribuir(poke);
    });
}

buscar();

const atribuir = (data) => {
    result = data;
    console.log(result);
    desenharTela();
}

const desenharTela = () => {

    let hp;
    let attack;
    let defence;
    let special;

    result.stats.forEach((stat) => {
        
        if (stat.stat.name == 'hp') {

            hp = stat.base_stat;

        } else if (stat.stat.name == 'attack') {

            attack = stat.base_stat;

        } else if (stat.stat.name == 'defense') {

            defence = stat.base_stat;

        } else if (stat.stat.name == 'special-attack') {

            special = stat.base_stat;

        }
    })

    let main = `
        <div id="pokeinfo">
            <div id="pokename">
                <span id="name">
                    ${result.name}
                </span>
            </div>
            <div id="pokeimage">
                <img src="${result.sprites.front_default}" alt="">
            </div>
            <div id="pokeattr">
                <div class="attr">Ataque: <span id="attack">${attack}</span></div>
                <div class="attr">Defesa: <span id="defence">${defence}</span></div>
                <div class="attr">Ataque Especial: <span id="special_atk">${special}</span></div>
                <div class="attr">HP: <span id="hp">${hp}</span></div>
            </div>
        </div>
    `;

    let htmlMain = $('#pokeinfo-area');
    htmlMain.html('');

    htmlMain.append(main);
}