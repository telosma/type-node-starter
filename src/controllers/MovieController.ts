import { Request, Response } from 'express'
import prisma from '../database'

class MovieController {
  //GET movies
  static getMovies = async(req: Request, res: Response) => {
    const movies = await prisma.movie.findMany({
      include:{quotes:true}
    })
    return res.send(movies)
  }
  //POST movie
  static postMovie = async(req: Request, res: Response) => {
    const {name} = req.body
    const post = await prisma.movie.create({
      data:{
        name
      }
    })
    return res.send(post)
  }

  //UPDATE movie
  static updateMovie =  async(req: Request, res: Response) => {
    const {id} = req.params
    const {name} = req.body
    const updateMovie = await prisma.movie.update({
      where:{id: Number(id)},
      data:{
        name
      }
    })
    return res.send(updateMovie)
  }

  //DELETE movie
  static delMovie = async(req: Request, res: Response) => {
    const {id} = req.params
    const del = await prisma.movie.delete({
      where:{
        id: Number(id)
      }
    })
    return res.send(del)
  }
}

export default MovieController
