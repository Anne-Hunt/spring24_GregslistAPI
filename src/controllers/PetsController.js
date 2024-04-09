import { petsService } from "../services/PetService.js";
import BaseController from "../utils/BaseController.js";


export class PetsController extends BaseController {
    constructor() {
        super('api/pets')
        this.router.get('', this.getPets)
    }

    async getPets(request, response, next) {
        try {
            const pets = await petsService.getPets()
            response.send(pets)
        } catch (error) {
            next(error)
        }
    }

}