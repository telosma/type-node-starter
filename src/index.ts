import cors from 'cors'
import dotenv from 'dotenv'
import statuses from 'statuses'
import express, { Response } from 'express'
import routes from './routes'

dotenv.config()

declare module 'express' {
  interface Response {
    sendStatus(statusCode: number): Response
  }
}
// TODO: Handler error body response
express.response.sendStatus = function (
  this: Response,
  statusCode: number
): Response {
  const message = statuses(statusCode) || String(statusCode)
  return this.status(statusCode).json({ message })
}

const app = express()
app.use(
  cors(),
  express.json(),
  express.urlencoded({ extended: true })
)

app.use('/', routes)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
