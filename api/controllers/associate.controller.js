import AssociateMember from '../models/associate.model.js';

export const registerAssociates = async (req, res, next) => {
  const {
    bus_stop,
    city,
    cur_address,
    dob,
    email,
    first_name,
    hod,
    last_name,
    middle_name,
    mobile_number,
    modality,
    state,
    title,
    university,
    whatsapp_number,
  } = req.body;

  const newMember = new AssociateMember({
    bus_stop,
    city,
    cur_address,
    dob,
    email,
    first_name,
    hod,
    last_name,
    middle_name,
    mobile_number,
    modality,
    state,
    title,
    university,
    whatsapp_number,
  });
  try {
    await newMember.save();
    res.status(201).json({ message: 'User created Successfully' });
  } catch (error) {
    next(error);
  }
};
