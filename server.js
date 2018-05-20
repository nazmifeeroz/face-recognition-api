const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')

database = {
  users: [
    {
      id: '1',
      name: 'John',
      email: 'john@email.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '2',
      name: 'Sally',
      email: 'sally@email.com',
      password: 'bananas',
      entries: 0,
      joined: new Date()
    },
    {
      id: '3',
      name: 'Mary',
      email: 'mary@email.com',
      password: 'apples',
      entries: 0,
      joined: new Date()
    },
  ]
}

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json(database.users)
})

app.post('/signin', (req, res) => {
  if (req.body.email === database.users[0].email &&
      req.body.email === database.users[0].email) {
    res.json({
      "success": "Name Found"
    }) } else {
      res.status(400).json({"success": "Name not found"})
    }
})

app.post('/register', (req, res) => {
  const {email, name,password} = req.body
  database.users.push({
    id: 4,
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  })
  res.json(database.users[database.users.length - 1])
})

app.get('/profile/:id', (req, res) => {
  const { id } = req.params
  let found = false
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user)
    }
  })
  if (!found) {
    res.status(400).json('no such user')
  }
})

app.put('/image', (req,res) => {
  const { id } = req.body
  let found = false
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++
      return res.json(user.entries)
    }
  })
  if (!found) {
    res.status(400).json('no such user')
  }
})

app.listen(3000, () => {
  console.log('server running on port 3000')
})