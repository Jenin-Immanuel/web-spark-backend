import mongoose from "mongoose";

const MachineSchema = new mongoose.Schema({
  vendorId: { type: String, required: true },
  machineName: { type: String, required: true },
  image: { type: Image, data: Buffer, contentType: String },
});
