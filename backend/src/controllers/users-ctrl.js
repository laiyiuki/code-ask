const User = require('../models/users-model');

const createUser = async (req, res) => {
  try {
    const { email, name, role } = req.body;
    const user = await User.create({
      email,
      name,
      role,
      questionsCanAsk: role === 'student' ? 2 : undefined,
    });
    res.send({ success: true, data: user });
  } catch (err) {
    res.send({ success: false, message: err.message, error: err });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.param;
    const user = await User.findById(id);

    if (!user) {
      res.send({ success: true, data: {} });
    } else {
      res.send({ success: true, data: user });
    }
  } catch (err) {
    res.send({ success: false, message: err.message, error: err });
  }
};

module.exports = {
  createUser,
  getUser,
};
