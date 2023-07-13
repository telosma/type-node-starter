import { Router, Request, Response } from 'express'
import QuoteController from '@root/controllers/QuoteController'
import MoviesController from '@root/controllers/MoviesController'
const router = Router()

router.get('/', (req: Request, res: Response) => { return res.send('Hello world!') })


//Movies
router.get('/movies',MoviesController.getMovies)
router.post('/movies',MoviesController.postMovie)
router.patch('/movies/:id',MoviesController.updateMovie)
router.delete('/movies/:id',MoviesController.delMovie)

//Quotes
router.get('/quotes', QuoteController.getQuotes)
router.post('/quotes',QuoteController.postQuote)
router.patch('/quotes/:id',QuoteController.updateQuote)
router.delete('/quotes/:id',QuoteController.delQuote)

export default router
