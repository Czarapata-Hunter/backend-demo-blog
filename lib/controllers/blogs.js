const { Router } = require('express');
const { Blog } = require('../models/Blog');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Blog.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const blogs = await Blog.getById(req.params.id);
      await blogs.addComments();
      res.json(blogs);
    } catch (e) {
      next(e);
    }
  });
