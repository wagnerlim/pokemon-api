import { Test } from "@nestjs/testing"
import { Connection } from "mongoose";
import { AppModule } from "src/app.module"
import { DatabaseService } from "src/database/database.service";

describe('PokemonsController', () => {
  let dbConnection: Connection;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    const app = moduleRef.createNestApplication();
    await app.init();
    dbConnection = moduleRef.get<DatabaseService>(DatabaseService).getDbHandle();
  })

  describe('findOne', async () => {
    await dbConnection.collection('pokemons').insertOne({})
  })

})

// https://www.youtube.com/watch?v=R2ndY_JhxWk minuto 17:33