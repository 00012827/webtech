const express = require('express')
const app = express()

const fs = require('fs')

app.set('view engine', 'pug')

app.use('/static', express.static('public'))

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.post('/create', (req, res) => {
  const Title = req.body.title
  const Name = req.body.fname
  const Surname = req.body.sname
  const Gmail = req.body.gmail
  const Description = req.body.description
  
  if (Title.trim() === '' , Name.trim() === '' , Surname.trim() === '' , Gmail.trim() === '' , Description.trim() === '') {
      res.render('create', { error: true, })
  } else {
    fs.readFile('./data/posts.json', (err, data) => {
      if (err) throw err

      const posts = JSON.parse(data)

      posts.push({
        id: id (),  
        Title: title,
        Name: fname,
        Surname: sname,
        Gmail: gmail,
        Description: description,  
      })

      fs.writeFile('./data/posts.json', JSON.stringify(posts), err => {
        if (err) throw err 

        res.render('create', { success: true })
      })
    })  
  }
})


const posts = ['Some funny post', 'Funny two ']

app.get('/posts', (req, res) => {
    res.render('posts', { posts: posts })
})

app.get('/posts/detail', (req, res) => {
    res.render('detail')
})

app.listen(4000, err => {
    if(err) console.log(err)

    console.log('App is running on the port 4000...')
})


function id () {
    return '_' + Math.random().toString(36).substr(2, 9);
}