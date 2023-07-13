import { Router, Request, Response } from 'express'
import QuoteController from '@root/controllers/QuoteController'

const router = Router()

router.get('/', (req: Request, res: Response) => { return res.send('Hello world!') })

router.get('/quotes', QuoteController.index)
router.post('/quotes', QuoteController.store)

export default router
