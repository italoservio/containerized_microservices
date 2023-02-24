import express, {Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.get('/ms2', async (req: Request, res: Response) => {
  res.json({
    foo: 'bar',
  })
})

app.listen(process.env.PORT, () => {
  console.log(`MS2 listening at http://localhost:${process.env.PORT}`)
})
