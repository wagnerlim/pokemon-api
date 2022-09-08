import { Test } from "@nestjs/testing";
import { Connection } from "mongoose";


import { pokemonStub } from "../stubs/pokemon.stub";

import * as request from 'supertest';
import { AppModule } from "../../app.module";
import { DatabaseService } from "../../database/database.service";


describe('PokemonsController', () => {
  let dbConnection: Connection;
  let app: any

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
    dbConnection = moduleRef.get<DatabaseService>(DatabaseService).getDbHandle();
  })

  afterAll(async () => {
    await app.close()
  });

  beforeEach(async () => {
    await dbConnection.collection('pokemons').deleteMany({}); //antes do teste começar apaga a base de dados
  });

  describe('InsertOnePokemon', () => {
    it('should be insert one pokemon', async () => {
      await dbConnection.collection('pokemons').insertOne(pokemonStub()); //Insere um pokemon com as configurações colocadas dentro do user stub.
      const response = await request(app.getHttpServer()).get('/pokemons'); //faz uma consulta nesse endereço, que no caso é un get de todos os pokemons na base, como ela foi apagada antes do teste rodar ela deve trazer apenas o pokemon que foi inserido . 

      expect(response.status).toBe(200); //verifica o status da resposta
      expect(response.body).toMatchObject([pokemonStub()]); //verifica o corpo da resposta
    })
  });

  describe('get OnePokemon From PokeApi', () => {
    it('Get a pokemon from external API', async () => {
      const response = await request(app.getHttpServer()).get('/pokemons/search/1');

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject(pokemonStub());
    })
  })

  describe('insert pokemons by index on route', () => {
    it('Insert many pokemons', async () => {
      const response = await request(app.getHttpServer()).post('/pokemons/populate/10');
      const manyInserts = await dbConnection.collection('pokemons').find({}).toArray();

      expect(response.status).toBe(201);
      expect(manyInserts.length).toBe(10);

    })
  })

})



// https://www.youtube.com/watch?v=R2ndY_JhxWk minuto 17:33