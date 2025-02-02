const mongoose = require('mongoose')
const profModel = require('./proffesors')

const projectSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    description : {
        type: String, 
        required : true  
    },
    prereg : {
        type : String
    },
    openfor:{
        type: String
    },
    resumerequired : {
        type : String,
        required : true
    },
    maxstudents : {
        type : String,
        required : true
    },
    cpirequired : {
        type : String
    },
    projectCategory : {
         type  : String
    },

    offeredByProf : {
        type : mongoose.Schema.ObjectId,
        ref: 'profs'
    },
    studentsEnrolled : {
        type: [
            {
                type : mongoose.Schema.ObjectId,
                ref : 'users'
            }
        ]
    },
    studentsRequested : [
        {
            type: mongoose.Schema.ObjectId,
            ref:'User'
        }
    ]
})

// projectSchema.pre(/^find/,function(next){
//     this.populate({
//         path:'studentsRequested',
//         select: '-__v'
//     })
//     next()
// })

// projectSchema.pre(/^find/,function(next){
//     this.populate({
//         path:'studentsEnrolled',
//         select: '-__v'
//     })
//     next()
// })

const Project = new mongoose.model('Project',projectSchema)

module.exports = {Project}
