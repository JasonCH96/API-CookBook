import {AppDataSource} from "../datasource.js"
import {Recipes} from "../models/recipes.model.js"

class RecipesController {
    static async create (req, res){
        await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(Recipes)
            .values([
                { Name: req.body.Name, Description: req.body.Description, isActive:true},
            ])
            .execute()
        res.send("Receta creada")
    }
    static async get (req, res){
        const recipe = await AppDataSource.createQueryBuilder().select("recipe").from(Recipes, "recipe").getMany()
        res.json(recipe)
    }
    static async getById (req, res){
        const recipe = await AppDataSource
            .createQueryBuilder()
            .select("recipe")
            .from(Recipes, "recipe")
            .where("recipe.id = :id", { id: req.params.id })
            .getOne()
            res.json(recipe)
    }
    static async update(req, res){
            await AppDataSource.createQueryBuilder()
            .update(Recipes)
            .set({
            Name: req.body.Name, Description: req.body.Description, isActive:true
    })
    .where("id = :id", { id: req.params.id  })
    .execute()
    res.send("Updated")
    }
    static async delete(req, res){
        const recipe = await AppDataSource
            .createQueryBuilder()
            .delete()
            .from(recipe)
            .where("id = :id", { id: req.params.id })
            .execute()
            res.send("Receta Eliminada")
            
    }
}
export default RecipesController