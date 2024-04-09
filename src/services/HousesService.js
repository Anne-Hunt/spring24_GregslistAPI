import { dbContext } from "../db/DbContext.js"


class HousesService {
    async getHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }

    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) throw new Error(`No house found at that id ${houseId}`)
        return house

    }

    async searchHouses(searchQuery) {
        const houses = await dbContext.Houses.find(searchQuery)
        return houses
    }
}

export const housesService = new HousesService()