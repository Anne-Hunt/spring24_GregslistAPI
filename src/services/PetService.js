import { dbContext } from "../db/DbContext.js"


class PetsService {
    async getPets() {
        const pets = await dbContext.Pets.find()
        return pets
    }

}

export const petsService = new PetsService()