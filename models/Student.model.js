import mongoose from "mongoose"

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  profile: {
    type: String,
  },

});

const StudentModel = mongoose.model("student", studentSchema);

export default StudentModel;