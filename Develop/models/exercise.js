//Exercise Model

//require mongoose
const mongoose = require("mongoose"); 
//setup the schema
const Schema = mongoose.Schema;

const excersiceSchema = new Schema([
    {
        workout: {
            type: Date,
            default: Date.now
        }
    },
    {
        excercises:
        [
            {
                exerciseType: String,
                name: String,
                duration: Number,
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number
            }
        ]
    }
]); 

const Workout = mongoose.model("Workout", excersiceSchema);
//export it
module.exports = Workout