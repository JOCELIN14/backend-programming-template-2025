const bcrypt = require('bcrypt');
const User = require('../users/users-service');

exports.login = async (req, email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const { _id: userId } = user;
  req.session.userId = userId;

  return { message: 'Login successful', userId };
};
