const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/create', (req, res) => {
    res.render('create')
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