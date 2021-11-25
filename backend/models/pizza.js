import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  pizzaSize : {type: mongoose.Schema.ObjectId,ref:"pizzaSizes"},
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const pizza = mongoose.model("pizza", pizzaSchema);

export default pizza;
