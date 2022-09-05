export class CreatePokemonDto {
    pokemon_id: number;
    name: string
    type: Array<string>;
    moves: Array<any>;
    abilities: Array<any>;
    sprites: Array<any>

}
