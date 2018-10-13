const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const calcDay = require('./calcDay')
const codes = require('./todays-code.json')
const port = process.env.PORT || 3000
const carbonUrl = code => `https://carbon.now.sh/?bg=rgba(171,%20184,%20195,%201)&t=material&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=10px&ph=9px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&code=${encodeURIComponent(code)}&es=2x&wm=false&ts=false`
const template = url => `<!DOCTYPE html><html><head><title>Today's JS Function</title><style>*, body, html{box-sizing: border-box; width: 100%; height: 100%; margin: 0; border: 0; padding: 0; overflow: hidden;}</style></head><body><iframe src="${url}"> <p>Your browser does not support iframes.</p></iframe></body></html>`
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req, res) => {
  res.send(template(carbonUrl(codes[calcDay() - 228])))
})

app.get('/:n', async (req, res) => {
  res.send(template(carbonUrl(codes[calcDay() - 228 + Number(req.params.n)])))
})

app.listen(port)