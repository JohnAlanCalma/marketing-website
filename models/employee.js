var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  name: String,
  locations: [{ type: Schema.ObjectId, ref: "Location" }],
  department: String,
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
EmployeeSchema.pre("save", function preSave(next) {
  const employee = this;
  employee.updatedAt(Date.now());
  next();
});

module.exports = mongoose.model("Employee", EmployeeSchema);
