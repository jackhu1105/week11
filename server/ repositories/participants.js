const Participant = require('../models/Participant');

const create = (payload) => new Participant(payload).save();

const list = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const total = await Participant.countDocuments();
  const items = await Participant.find().skip(skip).limit(limit);
  return { total, items };
};

const update = (id, payload) => Participant.findByIdAndUpdate(id, payload, { new: true });

const remove = (id) => Participant.findByIdAndDelete(id);

module.exports = { create, list, update, remove };
