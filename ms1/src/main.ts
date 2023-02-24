import express, {Request, Response} from 'express'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.get('/ms1', async (req: Request, res: Response) => {

  type TMS2Response = {foo: string};

  let ms2_res = {} as TMS2Response;
  try {
    const {data} = await axios.get<TMS2Response>(process.env.MS2_URL || '', {
      timeout: 5000
    })
    ms2_res = data as TMS2Response;
  } catch (err) {
    console.log(err)
  }

  res.status(200).json({
    fizz: 'buzz',
    ...(Object.keys(ms2_res).length && ms2_res)
  })
})

app.listen(process.env.PORT, () => {
  console.log(`MS1 listening at http://localhost:${process.env.PORT}`)
})
