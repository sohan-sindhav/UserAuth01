import User from "../models/userModel.js";
import generateToken from "../utils/GenerateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ username, email, password });

    generateToken(res, user._id);

    res.status(201).json({
      user: {
        _id: user._id,
        name: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginuser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  generateToken(res, user._id);
  res.json({ user: { _id: user._id, name: user.username, email: user.email } });
};

export const logoutuser = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    expires: new Date(0), // Set to past date to immediately expire
  });
  res.status(200).json({ message: "Logged out successfully" });
};

export const getuserProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.json({ user });
};
