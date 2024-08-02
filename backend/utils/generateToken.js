import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  process.env.JWT_SECRET = "6uk5tvkiKRjOmecWETosgNQ0SfJ5akRopA1nbSi+VE8=";
  console.log("JWT_SECRET:", process.env.JWT_SECRET);

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
