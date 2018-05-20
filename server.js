const bodyParser = require('body-parser')
const express = require('express')
const app = express()

database = {
  users: [
    {
      id: 1,
      name: 'John',
      age: 30
    },
    {
      id: 2,
      name: 'Sally',
      age: 6
    },
    {
      id: 3,
      name: 'Mary',
      age: 31
    },
  ]
}

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json('this is working')
})

app.post('/signin', (req, res) => {
  if (req.body.name === database.users[0].name) {
    res.json({
      "success": "Name Found"
    }) } else {
      res.status(400).json({"success": "Name not found"})
    }

})

app.listen(3000, () => {
  console.log('server running on port 3000')
})