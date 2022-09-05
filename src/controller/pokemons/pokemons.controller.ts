import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import axios from 'axios';
import { version } from 'os';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './schema/create-pokemon.dto';
import { UpdatePokemonDto } from './schema/update-pokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  baseUrl: string = 'https://pokeapi.co/api/v2'
  constructor(private readonly pokemonsService: PokemonsService) { }

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonsService.create(createPokemonDto);
  }

  @Get()
  findAll() {
    return this.pokemonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonsService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonsService.remove(id);
  }

  @Get('search/:id')
  async searchById(@Param('id') id: string) {
    try {
      console.log(`${this.baseUrl}/pokemon/${id}`);
      const pokemon = (await axios.get(`${this.baseUrl}/pokemon/${id}`)).data

      const types = pokemon.types.map((res: any) => {
        return {
          "type": res.type.name,
          "url": res.type.url
        }
      });

      const abilities = pokemon.abilities.map((res: any) => {
        return {
          "name": res.ability.name,
          "url": res.ability.url
        }
      });

      const moves = pokemon.moves.map((res: any) => {
        return {
          "name": res.move.name,
          "version": res.version_group_details.map((details: any) => {
            return {
              "name": details.version_group.name,
              "learn_method": details.move_learn_method.name,
              "learn_at_level": details.level_learned_at > 0 ? details.level_learned_at : null
            }
          })
        }
      });

      const pokemonInfo = {
        "pokemon_id": Number(pokemon.id),
        "name": String(pokemon.name),
        "weight": Number(pokemon.weight),
        "type": types,
        "moves": moves,
        "abilities": abilities,
        "sprites": []
      }
      pokemonInfo.sprites.push(pokemon.sprites)
      return pokemonInfo
    } catch (error) {
      if (error.response.status === 404) {
        // return { "message": 'Pokemon not found' }
      }
    }
  }

  @Post('populate/:lastIndex')
  async populateMongoDb(@Param('lastIndex') lastIndex: string) {
    console.log('Iniciou');
    console.log('lastIndex :>> ', lastIndex);
    for (let index = 1; index <= Number(lastIndex); index++) {
      let res = await this.searchById(String(index));
      await this.create(res);
    }
    console.log('Acabou')
  }
}
