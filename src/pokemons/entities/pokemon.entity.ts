import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PokemonDocument = Pokemon & Document;

@Schema()
export class Pokemon {
    @Prop()
    pokemon_id: number;

    @Prop()
    name: string;

    @Prop()
    type: Array<string>;

}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);