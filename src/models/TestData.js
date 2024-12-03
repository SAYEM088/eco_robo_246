import mongoose from "mongoose";

const TestDataSchema = new mongoose.Schema({
  testNo: { type: Number, required: true },
  ph: { type: Number, required: true },
  ec: { type: Number, required: true },
  salt: { type: Number, required: true },
  tds: { type: Number, required: true },
});

export default mongoose.models.TestData || mongoose.model("TestData", TestDataSchema);
