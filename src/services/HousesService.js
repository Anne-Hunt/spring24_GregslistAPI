import { dbContext } from "../db/DbContext.js"


class HousesService {
    async getHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }

    async createHouse(house) {
        const createdHouse = await dbContext.Houses.create(house)
        return createdHouse
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

    async trashHouse(houseId) {
        const housetoTrash = await dbContext.Houses.deleteOne(houseId)
        return housetoTrash
    }

}

export const housesService = new HousesService()