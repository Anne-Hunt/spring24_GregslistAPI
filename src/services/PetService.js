import { dbContext } from "../db/DbContext.js"


class PetsService {
    async getPets() {
        const pets = await dbContext.Pets.find()
        return pets
    }

    async searchPets(searchQuery) {
        const pets = await dbContext.Pets.find(searchQuery)
        return pets
    }

    async getPetById(petId) {
        const pet = await dbContext.Pets.findById(petId)
        if (!pet) throw new Error(`That pet isn't available ${petId}`)
        return pet
    }
}

export const petsService = new PetsService()