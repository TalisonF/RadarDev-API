const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'devradar'
    }
});

const setupPaginator = require('knex-paginator');
setupPaginator(knex);

module.exports = knex;