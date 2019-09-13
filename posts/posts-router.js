const express = require('express')

const postsRouter = express.Router()
const jsonBodyParser = express.json()

postsRouter 
  .route('/')
  .get((req, res, next) => {
    let knex = req.app.get('db')
    knex
    .from('posts')
    .select('content')
    .then((posts) => {
      res.json(posts)
    }) 
    .catch(next)
  }) 

  

  .post(jsonBodyParser, (req, res, next) => {
    const {content} = req.body
    const allPosts = {content}
    
    for (const [key, value] of Object.entries(allPosts))
      if (value == null)
        return res.status(400).json({
          error: `missing '${key}' in request body`
        })


       req.app.get('db')
        .insert(allPosts)
        .into('posts')
        .returning('*')
        .then( () => res.status(201).json(allPosts))
        .catch(next)
     
        

  } )

module.exports = postsRouter;