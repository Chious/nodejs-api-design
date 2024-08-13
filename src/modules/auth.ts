import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";

type User = {
  userId: number;
  username: string;
};

export const comparePassword = (password: string, hashedPassword: string) => {
  return bycrypt.compare(password, hashedPassword);
};

export const hashPassword = (password: string) => {
  return bycrypt.hash(password, 5);
};

export const createJWT = (user) => {
  return jwt.sign(
    { id: user.userId, username: user.username },
    process.env.JWT_SECRET!
  );
};

export const protectRoute = (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    res.status(401);
    res.json({ message: "You need to be logged in to access this route" });
    return;
  }

  const [_, token] = bearerToken.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "You need to be logged in to access this route" });
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = payload;
    next();
  } catch (e) {
    res.status(401);
    res.json({ message: "Invalid Token" });
    return;
  }
};
