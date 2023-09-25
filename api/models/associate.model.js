import mongoose from 'mongoose';

const associateSchema = new mongoose.Schema(
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
    university: {
      type: String,
      required: true,
    },
    hod: {
      type: String,
    },
  },
  { timestamps: true }
);

const AssociateMember = mongoose.model('Associate', associateSchema);

export default AssociateMember;
