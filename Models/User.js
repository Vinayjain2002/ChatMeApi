const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "frontName": {
        type: String,
        required: [true, "Front name is required"],
        trim: true,
        lowercase: true,
    },
    "lastName": {
        type: String,
        trim: true,
        lowercase: true,
    },
    "fullName": {
        type: String,
        required: [true, "Full name is required"],
        trim: true,
        index: true        
    },
    "userName": {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        lowercase: true,
        unique: true,
    },
    "email": {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true
    },
    "contactNo": {
        type: String,
        trim: true,
        lowecase: true
    },
    "password": {
        type: String,
        required: true
    },
    "bio": {
        type: String,
        default: ""
    },
    "description": {
        type: String,
        default: ""
    },
    "profilePicture": {
        type: String,
        default: ""
    },
    "coverPhoto": {
        type: String,
        default: ""
    },
    "createdAt": {
        type: String,
    },
    "mongifiedAt": {
        type: String
    }, // <-- Add a comma here
    "posts": [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    "stories": [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Story"
    }],
    "followers":[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    "following": [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    "blockList":[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    "closeFriend": [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
}, {index: {fullName: 1, userName: 1, email: 1, contactNo: 1}, timestamps: true});

const User= mongoose.model("User", userSchema);
module.exports =User;