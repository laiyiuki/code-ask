const User = require('../models/users-model');
const Question = require('../models/questions-model');

const createQuestion = async (req, res) => {
  try {
    const { content, image, languages } = req.body;
    // ===== Can be replaced by req.user if passport auth middleware run before this
    const { userId } = req.params;
    const student = await User.findById(userId);

    if (!student) {
      throw new Error('User not found.');
    }
    // =====
    if (student.questionsCanAsk <= 0) {
      throw new Error('You do not have enough credit to ask a question');
    }

    const question = await Question.create({
      studentId: userId,
      content,
      image,
      languages,
    });

    await User.findByIdAndUpdate(userId, { $inc: { questionsCanAsk: -1 } });

    // notify instructors here

    res.send({ success: true, data: question });
  } catch (err) {
    res.send({ success: false, message: err.message, error: err });
  }
};

module.exports = {
  createQuestion,
};
