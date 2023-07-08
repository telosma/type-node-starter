import { Request, Response } from 'express'
import prisma from '../database'

class QuoteController {
  static index = async(req: Request, res: Response) => {
    const quotes = await prisma.quote.findMany()

    return res.send(quotes)
  }
}

export default QuoteController
