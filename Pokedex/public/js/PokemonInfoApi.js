var PokemonsStatusJson;
var PokemonsTiposJson;
var TiposVatagensDesvantagens;


var PokemonPesquisado;
var PokemonForm;

function filtrarPokemon(){
    PokemonPesquisado = $('#nomePokemon').val().toLowerCase();

    //Buscar o Objeto de status do pokemon filtrado
    let filtradosStatus = PokemonsStatusJson.filter(pokemon => pokemon.pokemon_name.toLowerCase() == PokemonPesquisado);
    let pokemonStatus;
    if (filtradosStatus.length > 0){
        pokemonStatus = filtradosStatus[0]
    }else{
        alert(`O pokémon ${PokemonPesquisado} não está disponivel.`);
        return;
    }

    //Buscar o Objeto de tipos do pokemon filtrado
    let filtradosTipos = PokemonsTiposJson.filter(pokemon => pokemon.pokemon_name.toLowerCase() == PokemonPesquisado);
    let pokemonTipos;
    if (filtradosTipos.length > 0){
        pokemonTipos = filtradosTipos[0];
    }

    //Buscar Sprite
    BuscarPokemonForm();
     
    CarregarInformacoesPokemon(pokemonStatus, pokemonTipos);
}

function RetornarVantagens(tiposPokemon){
    let vantagens = [];
    tiposPokemon.split(', ').forEach(function(tipo){
        if (TiposVatagensDesvantagens[tipo]["Bug"] > 1){
            vantagens.push('Bug');            
        }
        if (TiposVatagensDesvantagens[tipo]["Dark"] > 1){
            vantagens.push('Dark');            
        }
        if (TiposVatagensDesvantagens[tipo]["Dragon"] > 1){
            vantagens.push('Dragon');            
        }
        if (TiposVatagensDesvantagens[tipo]["Electric"] > 1){
            vantagens.push('Electric');            
        }
        if (TiposVatagensDesvantagens[tipo]["Fairy"] > 1){
            vantagens.push('Fairy');            
        }
        if (TiposVatagensDesvantagens[tipo]["Fighting"] > 1){
            vantagens.push('Fighting');            
        }
        if (TiposVatagensDesvantagens[tipo]["Fire"] > 1){
            vantagens.push('Fire');            
        }
        if (TiposVatagensDesvantagens[tipo]["Flying"] > 1){
            vantagens.push('Flying');            
        }
        if (TiposVatagensDesvantagens[tipo]["Ghost"] > 1){
            vantagens.push('Ghost');            
        }
        if (TiposVatagensDesvantagens[tipo]["Grass"] > 1){
            vantagens.push('Grass');            
        }
        if (TiposVatagensDesvantagens[tipo]["Ground"] > 1){
            vantagens.push('Ground');            
        }
        if (TiposVatagensDesvantagens[tipo]["Ice"] > 1){
            vantagens.push('Ice');            
        }
        if (TiposVatagensDesvantagens[tipo]["Normal"] > 1){
            vantagens.push('Normal');            
        }
        if (TiposVatagensDesvantagens[tipo]["Poison"] > 1){
            vantagens.push('Poison');            
        }
        if (TiposVatagensDesvantagens[tipo]["Psychic"] > 1){
            vantagens.push('Psychic');            
        }
        if (TiposVatagensDesvantagens[tipo]["Rock"] > 1){
            vantagens.push('Rock');            
        }
        if (TiposVatagensDesvantagens[tipo]["Steel"] > 1){
            vantagens.push('Steel');            
        }
        if (TiposVatagensDesvantagens[tipo]["Water"] > 1){
            vantagens.push('Water');            
        }
    });
    return vantagens.join(', ');
}

function RetornarDesvantagens(tiposPokemon){
    let desvantagens = [];
    tiposPokemon.split(', ').forEach(function(tipo){
        if (TiposVatagensDesvantagens[tipo]["Bug"] < 1){
            desvantagens.push('Bug');            
        }
        if (TiposVatagensDesvantagens[tipo]["Dark"] < 1){
            desvantagens.push('Dark');            
        }
        if (TiposVatagensDesvantagens[tipo]["Dragon"] < 1){
            desvantagens.push('Dragon');            
        }
        if (TiposVatagensDesvantagens[tipo]["Electric"] < 1){
            desvantagens.push('Electric');            
        }
        if (TiposVatagensDesvantagens[tipo]["Fairy"] < 1){
            desvantagens.push('Fairy');            
        }
        if (TiposVatagensDesvantagens[tipo]["Fighting"] < 1){
            desvantagens.push('Fighting');            
        }
        if (TiposVatagensDesvantagens[tipo]["Fire"] < 1){
            desvantagens.push('Fire');            
        }
        if (TiposVatagensDesvantagens[tipo]["Flying"] < 1){
            desvantagens.push('Flying');            
        }
        if (TiposVatagensDesvantagens[tipo]["Ghost"] < 1){
            desvantagens.push('Ghost');            
        }
        if (TiposVatagensDesvantagens[tipo]["Grass"] < 1){
            desvantagens.push('Grass');            
        }
        if (TiposVatagensDesvantagens[tipo]["Ground"] < 1){
            desvantagens.push('Ground');            
        }
        if (TiposVatagensDesvantagens[tipo]["Ice"] < 1){
            desvantagens.push('Ice');            
        }
        if (TiposVatagensDesvantagens[tipo]["Normal"] < 1){
            desvantagens.push('Normal');            
        }
        if (TiposVatagensDesvantagens[tipo]["Poison"] < 1){
            desvantagens.push('Poison');            
        }
        if (TiposVatagensDesvantagens[tipo]["Psychic"] < 1){
            desvantagens.push('Psychic');            
        }
        if (TiposVatagensDesvantagens[tipo]["Rock"] < 1){
            desvantagens.push('Rock');            
        }
        if (TiposVatagensDesvantagens[tipo]["Steel"] < 1){
            desvantagens.push('Steel');            
        }
        if (TiposVatagensDesvantagens[tipo]["Water"] < 1){
            desvantagens.push('Water');            
        }
    });
    return desvantagens.join(', ');
}

function CarregarInformacoesPokemon(pokemonStatus, pokemonTipos){

    if (pokemonStatus != null){
        $('#Nome').text(pokemonStatus.pokemon_name);
        $("#Nome").attr('title', pokemonStatus.pokemon_name);

        $('#Ataque').val(pokemonStatus.base_attack);
        $("#Ataque").attr('title', `Ataque: ${pokemonStatus.base_attack}`);

        $('#Defesa').val(pokemonStatus.base_defense);
        $("#Defesa").attr('title', `Defesa: ${pokemonStatus.base_defense}`);

        $('#Estamina').val(pokemonStatus.base_stamina);
        $("#Estamina").attr('title', `Estamina: ${pokemonStatus.base_stamina}`);
    }

    if (pokemonTipos != null){
        let tipos = pokemonTipos.type.join(', ');
        $('#Tipo').val(tipos);
        $("#Tipo").attr('title', tipos);

        let vantagens = RetornarVantagens(tipos);
        $('#Vantagens').val(vantagens);
        $("#Vantagens").attr('title', vantagens);

        let desvantagens = RetornarDesvantagens(tipos);
        $('#Desvantagens').val(desvantagens);
        $("#Desvantagens").attr('title', desvantagens);
    }
}

function BuscarStatusPokemons(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fa500b62eamsh5dfff4c9da9c50cp125cb4jsn5e0ac3464811",
            "x-rapidapi-host": "pokemon-go1.p.rapidapi.com"
        },
        success: function(pokemons){
            PokemonsStatusJson = pokemons;
        },
        error: function(erro){
            console.log(erro);
        } 
    };
    $.ajax(settings);
}

function BuscarTipoDosPokemons(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://pokemon-go1.p.rapidapi.com/pokemon_types.json",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fa500b62eamsh5dfff4c9da9c50cp125cb4jsn5e0ac3464811",
            "x-rapidapi-host": "pokemon-go1.p.rapidapi.com"
        },
        success: function(pokemons){
            PokemonsTiposJson = pokemons;
        },
        error: function(erro){
            console.log(erro);
        } 
    };
    $.ajax(settings);
}

function BuscarVantagensEDesvantagensPokemons(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://pokemon-go1.p.rapidapi.com/type_effectiveness.json",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fa500b62eamsh5dfff4c9da9c50cp125cb4jsn5e0ac3464811",
            "x-rapidapi-host": "pokemon-go1.p.rapidapi.com"
        },
        success: function(pokemons){
            TiposVatagensDesvantagens = pokemons;
        },
        error: function(erro){
            console.log(erro);
        } 
    };
    $.ajax(settings);
}

function BuscarPokemonForm(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://pokeapi.co/api/v2/pokemon-form/${PokemonPesquisado}/`,
        "method": "GET",
        success: function(pokemon){
            PokemonForm = pokemon;
            $("#SpritePokemon").attr('src', pokemon.sprites['back_default']);
            $("#SpritePokemon").attr('title', PokemonPesquisado);
        },
        error: function(erro){
            console.log(erro);
        } 
    };
    $.ajax(settings);
}


$(function(){
    BuscarStatusPokemons();
    BuscarTipoDosPokemons();
    BuscarVantagensEDesvantagensPokemons();
});