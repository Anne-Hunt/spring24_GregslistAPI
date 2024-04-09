import { Schema } from "mongoose";

export const PetSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    imgUrl: { type: String, required: true, maxLength: 1000 },
    age: { type: Number, required: true, max: 5000 },
    likes: { type: [String] },
    isVaccinated: { type: Boolean, required: true },
    status: { type: String, required: true, enum: ['adopted', 'adoptable'] },
    species: { type: String, required: true, enum: ['cat', 'dog', 'bird', 'capybara', 'snake', 'fish', 'guinea pig', 'pig', 'turtle', 'frog', 'lizard', 'imaginary', 'rodentia other'] },
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
}, {
    timestamps: true, toJSON: {
        virtuals: true
    }
})