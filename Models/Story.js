// here we are going to define the schema of the story ut by the user
const mongoose= require("mongoose");
const storySchema= new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    modifiedAt: {
        type: Date,
        default: Date.now()
    },
},{timestamps: true});

const Story= mongoose.model("Story", storySchema);
module.exports= Story;