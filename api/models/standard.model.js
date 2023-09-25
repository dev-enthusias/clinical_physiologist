import mongoose from 'mongoose';

const standardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    first_name: {
      type: String,
      require: true,
    },
    middle_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    dob: {
      type: String,
      require: true,
    },
    mobile_number: {
      type: Number,
      require: true,
    },
    whatsapp_number: {
      type: Number,
    },
    cur_address: {
      type: String,
      require: true,
    },
    bus_stop: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    modality: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    certificate: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const StandardMember = mongoose.model('Professional', standardSchema);

export default StandardMember;
