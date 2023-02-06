// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb';


const url = process.env.NEXT_PUBLIC_MONGODB_KEY;
// const url = 'mongodb://localhost:27017';
const client = new MongoClient(url as string);
const dbName = 'PulangKampung';
client.connect()
const collection = client.db(dbName).collection('Users');




type Data = {
  name?: string
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {username,
    firstName,
    lastName,
    email,
    countryCode,
    phoneNumber,
    password,
    } = req.body;
    const body = req.body
  

  try {
   const dbResponse = await collection.insertOne(body)
   console.log(dbResponse)
  } catch (error) {
    console.log(error)
  }
}
