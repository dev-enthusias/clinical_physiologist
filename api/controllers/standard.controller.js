import StandardMember from '../models/standard.model.js';

export const registerStandard = async (req, res, next) => {
  const {
    title,
    first_name,
    middle_name,
    last_name,
    email,
    dob,
    mobile_number,
    whatsapp_number,
    cur_address,
    bus_stop,
    town_city,
    state,
    modality,
    type,
    certificate,
  } = req.body;

  const newMember = new StandardMember({
    title,
    first_name,
    middle_name,
    last_name,
    email,
    dob,
    mobile_number,
    whatsapp_number,
    cur_address,
    bus_stop,
    town_city,
    state,
    modality,
    type,
    certificate,
  });

  try {
    await newMember.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};
