import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PokemonDocument = Pokemon & Document;

@Schema()
export class Pokemon {
    @Prop()
    pokemon_id: number;

    @Prop()
    name: string;

    @Prop()
    type: Array<object>;

    @Prop()
    moves: Array<object>;

    @Prop()
    abilities: Array<object>;

    @Prop()
    sprites: Array<object>;

}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);