import prisma from "../db";
import { createJWT, hashPassword, comparePassword } from "../modules/auth";

export const createUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

export const signinUser = async (req, res) => {
  const user = await prisma.user.findFirst({
    where: {
      username: req.body.username,
    },
  });

  if (!user) {
    res.status(404);
    res.json({ message: "User not found" });
    return;
  }

  const validPassword = await comparePassword(req.body.password, user.password);

  if (!validPassword) {
    res.status(401);
    res.json({ message: "Invalid Password" });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
