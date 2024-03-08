// ./pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { generateToken } from '../../../utils/auth';

const prisma = new PrismaClient();
const saltRounds = Number(process.env.SALT_ROUNDS ?? 8);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  const bCryptPassword = await bcrypt.hash(password, saltRounds)

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password: bCryptPassword,
      },
    })

    const accessToken = generateToken(newUser.id)
    res.status(201).json(accessToken)
  } catch (error) {
    console.log(error)
  }
}
