import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controller/users/users.module';
import { PokemonsModule } from './controller/pokemons/pokemons.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000'),
    UsersModule,
    PokemonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
