const express = require('express')
const app = express()
const port = 3000

app
  .get('*', (rew, res, next)=>{
    console.log('A request came');
  })
  .get('/', (req,res) => {
    console.log('Hello World');
  })
  .get('/newpaltz', (rew, res)=>{
    
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})