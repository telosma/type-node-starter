import prisma from '../database'
import { Request, Response } from 'express'

class QuoteController {

  //GET quotes
  static getQuotes = async(req: Request, res: Response) => {
    const quotes = await prisma.quote.findMany()
    return res.send(quotes)
  }

  //POST quote
  static postQuote = async(req: Request, res: Response) => {
    const {quote, saidBy,movieId} = req.body
    const post = await prisma.quote.create({
      data:{
        quote,
        saidBy,
        movie: {connect: { id: Number(movieId)}},
      },
    })
    return res.send(post)
  }

  //UPDATE quote
  static updateQuote =  async(req: Request, res: Response) => {
    const {id} = req.params
    const {quote} = req.body
    const updateQuote = await prisma.quote.update({
      where:{id: Number(id)},
      data:{
        quote
      }
    })
    return res.send(updateQuote)
  }

  //DELETE quote
  static delQuote = async(req: Request, res: Response) => {
    const {id} = req.params
    const del = await prisma.quote.delete({
      where:{
        id: Number(id)
      }
    })
    return res.send(del)
  }
}

export default QuoteController
