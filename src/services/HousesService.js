import { dbContext } from "../db/DbContext.js"


class HousesService {
    getHouseById(houseId) {
        throw new Error("Method not implemented.")
    }
    searchHouses(searchQuery) {
        throw new Error("Method not implemented.")
    }
    async getHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }

}

export const housesService = new HousesService()