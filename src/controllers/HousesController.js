import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/search', this.searchHouses)
            .get('/:houseId', this.getHousebyId)
            .post('', this.createHouse)
    }

    async getHouses(request, response, next) {
        try {
            const houses = await housesService.getHouses()
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async createHouse(request, response, next) {
        try {
            const house = request.data
            const createdHouse = await housesService.createHouse(house)
            response.send(createdHouse)
        } catch (error) {
            next(error)
        }
    }

    async searchHouses(request, response, next) {
        try {
            const searchQuery = request.query
            const houses = await housesService.searchHouses(searchQuery)
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async getHousebyId(request, response, next) {
        try {
            const houseId = request.params.houseId
            const house = await housesService.getHouseById(houseId)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }

    async trashHouse(request, response, next) {
        try {
            const houseId = request.params.houseId
            const housetoTrash = await housesService.trashHouse(houseId)
            response.send(housetoTrash)
        } catch (error) {
            next(error)
        }
    }
}