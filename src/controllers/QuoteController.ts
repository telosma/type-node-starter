import { Request, Response } from 'express'
import prisma from '../database'

class QuoteController {
  static index = async(req: Request, res: Response) => {
    const quotes = await prisma.quote.findMany()

    return res.send(quotes)
  }

  static store = async(req: Request, res: Response) => {
    const { quote, saidBy, movieId } = req.body

    const newQuote = await prisma.quote.create({
      data: {
        quote,
        saidBy,
        movie: {
          connect: { id: +movieId },
        },
      },
    })

    return res.send(newQuote)
  }
}

export default QuoteController
