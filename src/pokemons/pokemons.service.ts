import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon, PokemonDocument } from './entities/pokemon.entity';

@Injectable()
export class PokemonsService {
  constructor(@InjectModel(Pokemon.name) private pokemonModel: Model<PokemonDocument>) { }
  create(createPokemonoDto: CreatePokemonDto) {
    const pokemon = new this.pokemonModel(createPokemonoDto);
    return pokemon.save()
  }

  findAll() {
    return this.pokemonModel.find();
  }

  findOne(id: string) {
    return this.pokemonModel.findById(id);
  }

  update(id: string, updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonModel.findByIdAndUpdate(
      {
        _id: id
      },
      {
        updatePokemonDto
      },
      {
        new: true
      }
    );
  }

  remove(id: string) {
    return this.pokemonModel.deleteOne({
      ìd: id
    }).exec();
  }
}

