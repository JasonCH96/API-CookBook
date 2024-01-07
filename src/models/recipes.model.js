import { EntitySchema } from "typeorm"

export const User= new EntitySchema({
    name: "Recipes",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        Name: {
            type: String
        },
        Description: {
            type: Text
        },
        isActive: {
            type: Boolean
        }
    }
})