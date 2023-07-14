import { Router, Request, Response } from 'express'
import QuoteController from '@root/controllers/QuoteController'
import MovieController from '@root/controllers/MovieController'
const router = Router()

router.get('/', (req: Request, res: Response) => { return res.send('Hello world!') })


//Movies
router.get('/movies',MovieController.getMovies)
router.post('/movies',MovieController.postMovie)
router.patch('/movies/:id',MovieController.updateMovie)
router.delete('/movies/:id',MovieController.delMovie)

//Quotes
router.get('/quotes', QuoteController.getQuotes)
router.post('/quotes',QuoteController.postQuote)
router.patch('/quotes/:id',QuoteController.updateQuote)
router.delete('/quotes/:id',QuoteController.delQuote)

export default router
