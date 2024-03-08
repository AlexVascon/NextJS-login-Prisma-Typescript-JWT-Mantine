// ./pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { generateToken } from '@/utils/auth';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({ messages: 'Invalid username or password' })
    }

    const accessToken = generateToken(user.id)
    res.status(200).json(accessToken)

  } catch (error) {
    console.log(error)
  }
  
}
