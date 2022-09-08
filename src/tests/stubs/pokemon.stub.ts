import { CreatePokemonDto } from "src/controller/pokemons/schema/create-pokemon.dto"

export const pokemonStub = (): CreatePokemonDto => {
    return {
        pokemon_id: 1,
        name: "bulbasaur",
        type: [
            {
                "type": "grass",
                "url": "https://pokeapi.co/api/v2/type/12/"
            },
            {
                "type": "poison",
                "url": "https://pokeapi.co/api/v2/type/4/"
            }
        ],
        moves: [
            {
                "name": "razor-wind",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "egg",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "swords-dance",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "cut",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "bind",
                "version": [
                    {
                        "name": "black-2-white-2",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "vine-whip",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "yellow",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "level-up",
                        "learn_at_level": 10
                    },
                    {
                        "name": "crystal",
                        "learn_method": "level-up",
                        "learn_at_level": 10
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 10
                    },
                    {
                        "name": "emerald",
                        "learn_method": "level-up",
                        "learn_at_level": 10
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "level-up",
                        "learn_at_level": 10
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 9
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 9
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 9
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 9
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "level-up",
                        "learn_at_level": 10
                    },
                    {
                        "name": "xd",
                        "learn_method": "level-up",
                        "learn_at_level": 10
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 9
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 9
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 9
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 9
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 9
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "level-up",
                        "learn_at_level": 5
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 3
                    }
                ]
            },
            {
                "name": "headbutt",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "tackle",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "yellow",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "crystal",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "emerald",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "xd",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    }
                ]
            },
            {
                "name": "body-slam",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "take-down",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "level-up",
                        "learn_at_level": 18
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 21
                    }
                ]
            },
            {
                "name": "double-edge",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "xd",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "level-up",
                        "learn_at_level": 32
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 33
                    }
                ]
            },
            {
                "name": "growl",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "yellow",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "level-up",
                        "learn_at_level": 4
                    },
                    {
                        "name": "crystal",
                        "learn_method": "level-up",
                        "learn_at_level": 4
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 4
                    },
                    {
                        "name": "emerald",
                        "learn_method": "level-up",
                        "learn_at_level": 4
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "level-up",
                        "learn_at_level": 4
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 3
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 3
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 3
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 3
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "level-up",
                        "learn_at_level": 4
                    },
                    {
                        "name": "xd",
                        "learn_method": "level-up",
                        "learn_at_level": 4
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 3
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 3
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 3
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 3
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 3
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 1
                    }
                ]
            },
            {
                "name": "strength",
                "version": [
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "mega-drain",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "leech-seed",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "yellow",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "crystal",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "emerald",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "xd",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 7
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "level-up",
                        "learn_at_level": 9
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 9
                    }
                ]
            },
            {
                "name": "growth",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "level-up",
                        "learn_at_level": 34
                    },
                    {
                        "name": "yellow",
                        "learn_method": "level-up",
                        "learn_at_level": 34
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "level-up",
                        "learn_at_level": 32
                    },
                    {
                        "name": "crystal",
                        "learn_method": "level-up",
                        "learn_at_level": 32
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 32
                    },
                    {
                        "name": "emerald",
                        "learn_method": "level-up",
                        "learn_at_level": 32
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "level-up",
                        "learn_at_level": 32
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "level-up",
                        "learn_at_level": 32
                    },
                    {
                        "name": "xd",
                        "learn_method": "level-up",
                        "learn_at_level": 32
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 6
                    }
                ]
            },
            {
                "name": "razor-leaf",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "yellow",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "level-up",
                        "learn_at_level": 20
                    },
                    {
                        "name": "crystal",
                        "learn_method": "level-up",
                        "learn_at_level": 20
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 20
                    },
                    {
                        "name": "emerald",
                        "learn_method": "level-up",
                        "learn_at_level": 20
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "level-up",
                        "learn_at_level": 20
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 19
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 19
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 19
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 19
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "level-up",
                        "learn_at_level": 20
                    },
                    {
                        "name": "xd",
                        "learn_method": "level-up",
                        "learn_at_level": 20
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 19
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 19
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 19
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 19
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 19
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "level-up",
                        "learn_at_level": 23
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 12
                    }
                ]
            },
            {
                "name": "solar-beam",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "level-up",
                        "learn_at_level": 48
                    },
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "level-up",
                        "learn_at_level": 48
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "level-up",
                        "learn_at_level": 46
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "level-up",
                        "learn_at_level": 46
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 46
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "level-up",
                        "learn_at_level": 46
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "level-up",
                        "learn_at_level": 46
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "level-up",
                        "learn_at_level": 46
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "level-up",
                        "learn_at_level": 46
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 36
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "poison-powder",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "level-up",
                        "learn_at_level": 20
                    },
                    {
                        "name": "yellow",
                        "learn_method": "level-up",
                        "learn_at_level": 20
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "crystal",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "emerald",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "xd",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "level-up",
                        "learn_at_level": 14
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    }
                ]
            },
            {
                "name": "sleep-powder",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "level-up",
                        "learn_at_level": 41
                    },
                    {
                        "name": "yellow",
                        "learn_method": "level-up",
                        "learn_at_level": 41
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "crystal",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "emerald",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "xd",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 13
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "level-up",
                        "learn_at_level": 14
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 15
                    }
                ]
            },
            {
                "name": "petal-dance",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "egg",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "string-shot",
                "version": [
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "toxic",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "egg",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "rage",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "mimic",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "double-team",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "defense-curl",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "light-screen",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "reflect",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "bide",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "sludge",
                "version": [
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "skull-bash",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "egg",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "amnesia",
                "version": [
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "flash",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "rest",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "substitute",
                "version": [
                    {
                        "name": "red-blue",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "yellow",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "snore",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "curse",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "egg",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "protect",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "sludge-bomb",
                "version": [
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "mud-slap",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "outrage",
                "version": [
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "giga-drain",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "endure",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "charm",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "false-swipe",
                "version": [
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "swagger",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "fury-cutter",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "attract",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "sleep-talk",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "return",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "frustration",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "safeguard",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "sweet-scent",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "emerald",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 21
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 21
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 21
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 21
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "xd",
                        "learn_method": "level-up",
                        "learn_at_level": 25
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 21
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 21
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 21
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 21
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 21
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 24
                    }
                ]
            },
            {
                "name": "synthesis",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "level-up",
                        "learn_at_level": 39
                    },
                    {
                        "name": "crystal",
                        "learn_method": "level-up",
                        "learn_at_level": 39
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 39
                    },
                    {
                        "name": "emerald",
                        "learn_method": "level-up",
                        "learn_at_level": 39
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "level-up",
                        "learn_at_level": 39
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 33
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 33
                    },
                    {
                        "name": "platinum",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 33
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 33
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "level-up",
                        "learn_at_level": 39
                    },
                    {
                        "name": "xd",
                        "learn_method": "level-up",
                        "learn_at_level": 39
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 33
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 33
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 33
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 33
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 33
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 27
                    }
                ]
            },
            {
                "name": "hidden-power",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "sunny-day",
                "version": [
                    {
                        "name": "gold-silver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "crystal",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "rock-smash",
                "version": [
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "facade",
                "version": [
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "nature-power",
                "version": [
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "egg",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "helping-hand",
                "version": [
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "ingrain",
                "version": [
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "egg",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "knock-off",
                "version": [
                    {
                        "name": "platinum",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "secret-power",
                "version": [
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "weather-ball",
                "version": [
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "grass-whistle",
                "version": [
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "bullet-seed",
                "version": [
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "colosseum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "xd",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "magical-leaf",
                "version": [
                    {
                        "name": "ruby-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "emerald",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "firered-leafgreen",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "natural-gift",
                "version": [
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "worry-seed",
                "version": [
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 31
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 31
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 31
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 31
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 31
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 31
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 31
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 31
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 31
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 30
                    }
                ]
            },
            {
                "name": "seed-bomb",
                "version": [
                    {
                        "name": "diamond-pearl",
                        "learn_method": "level-up",
                        "learn_at_level": 37
                    },
                    {
                        "name": "platinum",
                        "learn_method": "level-up",
                        "learn_at_level": 37
                    },
                    {
                        "name": "platinum",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "level-up",
                        "learn_at_level": 37
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "level-up",
                        "learn_at_level": 37
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "level-up",
                        "learn_at_level": 37
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "level-up",
                        "learn_at_level": 37
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "level-up",
                        "learn_at_level": 37
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 37
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "level-up",
                        "learn_at_level": 37
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "level-up",
                        "learn_at_level": 18
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "energy-ball",
                "version": [
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "leaf-storm",
                "version": [
                    {
                        "name": "diamond-pearl",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "power-whip",
                "version": [
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "captivate",
                "version": [
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "grass-knot",
                "version": [
                    {
                        "name": "diamond-pearl",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "platinum",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "heartgold-soulsilver",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "venoshock",
                "version": [
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "round",
                "version": [
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "echoed-voice",
                "version": [
                    {
                        "name": "black-white",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "grass-pledge",
                "version": [
                    {
                        "name": "black-white",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "black-2-white-2",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "x-y",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "work-up",
                "version": [
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "grassy-terrain",
                "version": [
                    {
                        "name": "x-y",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "egg",
                        "learn_at_level": null
                    },
                    {
                        "name": "sword-shield",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "confide",
                "version": [
                    {
                        "name": "x-y",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "omega-ruby-alpha-sapphire",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "sun-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    },
                    {
                        "name": "ultra-sun-ultra-moon",
                        "learn_method": "machine",
                        "learn_at_level": null
                    }
                ]
            },
            {
                "name": "grassy-glide",
                "version": [
                    {
                        "name": "sword-shield",
                        "learn_method": "tutor",
                        "learn_at_level": null
                    }
                ]
            }
        ],

        abilities: [
            {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
            },
            {
                "name": "chlorophyll",
                "url": "https://pokeapi.co/api/v2/ability/34/"
            }
        ],
        sprites: [
            {
                "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
                "back_female": null,
                "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
                "back_shiny_female": null,
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                "front_female": null,
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
                "front_shiny_female": null,
                "other": {
                    "dream_world": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
                        "front_female": null
                    },
                    "home": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
                        "front_shiny_female": null
                    },
                    "official-artwork": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                    }
                },
                "versions": {
                    "generation-i": {
                        "red-blue": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png",
                            "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png",
                            "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/1.png",
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",
                            "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png",
                            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png"
                        },
                        "yellow": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png",
                            "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png",
                            "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/1.png",
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png",
                            "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png",
                            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/1.png"
                        }
                    },
                    "generation-ii": {
                        "crystal": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png",
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png",
                            "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/1.png",
                            "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/1.png",
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png",
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/1.png",
                            "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/1.png",
                            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/1.png"
                        },
                        "gold": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/1.png",
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/1.png",
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/1.png",
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/1.png",
                            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/1.png"
                        },
                        "silver": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/1.png",
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/1.png",
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/1.png",
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/1.png",
                            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/1.png"
                        }
                    },
                    "generation-iii": {
                        "emerald": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/1.png",
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/1.png"
                        },
                        "firered-leafgreen": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/1.png",
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/1.png",
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png",
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/1.png"
                        },
                        "ruby-sapphire": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/1.png",
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/1.png",
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/1.png",
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/1.png"
                        }
                    },
                    "generation-iv": {
                        "diamond-pearl": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/1.png",
                            "back_female": null,
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/1.png",
                            "back_shiny_female": null,
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/1.png",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/1.png",
                            "front_shiny_female": null
                        },
                        "heartgold-soulsilver": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/1.png",
                            "back_female": null,
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/1.png",
                            "back_shiny_female": null,
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/1.png",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/1.png",
                            "front_shiny_female": null
                        },
                        "platinum": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/1.png",
                            "back_female": null,
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/1.png",
                            "back_shiny_female": null,
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/1.png",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png",
                            "front_shiny_female": null
                        }
                    },
                    "generation-v": {
                        "black-white": {
                            "animated": {
                                "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif",
                                "back_female": null,
                                "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/1.gif",
                                "back_shiny_female": null,
                                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
                                "front_female": null,
                                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif",
                                "front_shiny_female": null
                            },
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/1.png",
                            "back_female": null,
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/1.png",
                            "back_shiny_female": null,
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/1.png",
                            "front_shiny_female": null
                        }
                    },
                    "generation-vi": {
                        "omegaruby-alphasapphire": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/1.png",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/1.png",
                            "front_shiny_female": null
                        },
                        "x-y": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/1.png",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/1.png",
                            "front_shiny_female": null
                        }
                    },
                    "generation-vii": {
                        "icons": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png",
                            "front_female": null
                        },
                        "ultra-sun-ultra-moon": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/1.png",
                            "front_shiny_female": null
                        }
                    },
                    "generation-viii": {
                        "icons": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/1.png",
                            "front_female": null
                        }
                    }
                }
            }
        ],
    }
}