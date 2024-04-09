import { dbContext } from "../db/DbContext.js"


class PetsService {
    async getPets() {
        const pets = await dbContext.Pets.find()
        return pets
    }

    searchPets(searchQuery) {
        _queryBuilder(searchQuery)

    }

    getPetById(petId) {

    }
}

export const petsService = new PetsService()