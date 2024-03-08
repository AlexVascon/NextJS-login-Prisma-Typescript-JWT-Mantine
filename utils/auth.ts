// utils/auth.ts

import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET ?? '';

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, secret, { expiresIn: '1h' }); 
};

export const verifyToken = (token: string): { userId: string } | null => {
  try {
    const decoded = jwt.verify(token, secret) as { userId: string };
    return decoded;
  } catch (error) {
    console.log(error)
    return null;
  }
};
