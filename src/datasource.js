import { DataSource } from "typeorm"
import { Recipes } from "./models/recipes.model.js" 
import dotenv from "dotenv";
dotenv.config();
export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "userMatriculado",
    password: "casa12345",
    database: "Cook_Book",
    synchronize: true,
    logging: true,
    entities: [Recipes],
    subscribers: [],
    migrations: [],
    options: { encrypt: false }
})
AppDataSource.initialize().then(async () => {
    console.log("Data Source has been initialized!")
}).catch(error => console.log(error))