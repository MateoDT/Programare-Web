const Router = require('express')();

const AuthorsController = require('../Authors/controllers.js');
const BooksController = require('../Books/controllers.js');
const PublishersController = require('../Publishers/controllers.js');
const UsersController = require('../Users/controllers.js');

Router.use('/authors', AuthorsController);
Router.use('/books', BooksController);
Router.use('/publishers', PublishersController);
Router.use('/users', UsersController);

module.exports = Router;
