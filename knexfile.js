// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host     : process.env.APP_DB_HOST     || '127.0.0.1',
      user     : process.env.APP_DB_USER     || '',
      password : process.env.APP_DB_PASSWORD || '',
      database : process.env.APP_DB_NAME     || 'jsi-bookshelf'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'postgresql'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'postgresql'
    }
  }

};