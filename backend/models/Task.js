const  mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
 taskName: {type:String, required:true},
 datetime: {type:Date, required:true},
 isCompleted: {type:Boolean, default:false}
});

const TaskModel = mongoose.model('Task', TaskSchema)

module.exports = TaskModel;