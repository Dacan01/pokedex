/*
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon e mostrar o cartão correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos 
1-listagem
2- cartao pokemon

precisamos criar duas variaveis js para trabalhar com os elementos da tela 

vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem do pokemon

-remover a classe aberto so do cartao que esta aberto
-ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar  
-remover a classe ativo que marca o pokemon selecionado
-adicionar a classe ativo no item da lista selecionado
*/


//precisamos criar duas variaveis no js para trabalhar com os elementos da tela 
alert('Bem Vindo ao Mundo Pokemon')

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')        
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado 
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})