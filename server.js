const express = require('express')
const articleRouter = require('./routes/articles.js')

const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: "I love my girl",
        createdAt: new Date(),
        description: "She is gorgeous"

    },
        {
            title: "Coding is actually cool",
            createdAt: new Date(),
            description: "Yes!"

        },
        {
            title: "Nodejs",
            createdAt: new Date(),
            description: "hello"

        }
    ]
    res.render('articles/index', { articles: articles})
})

app.listen(8000)