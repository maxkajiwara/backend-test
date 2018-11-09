const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

module.exports = {
	development: {
		client: 'mssql',
		connection: {
			host: 'localhost\\SQLEXPRESS',
			user: 'sa',
			password: 'admin',
			database: 'diydb',
			options: {
				port: 1433,
				encrypt: true
			}
		},
		useNullAsDefault: true,
		migrations: {
			directory: './migrations',
			tableName: 'migrations'
		},
		seeds: { directory: './seeds' }
	},

	production: {
		client: 'mssql',
		connection: {
			host: dbHost,
			user: dbUser,
			password: dbPassword,
			database: dbName,
			options: {
				port: 1433,
				encrypt: true
			}
		},
		pool: {
			min: 2,
			max: 10
		},
		useNullAsDefault: true,
		migrations: {
			directory: './migrations',
			tableName: 'migrations'
		},
		seeds: { directory: './seeds' }
	},

	heroku: {
		client: 'pg',
		connection: dbHost,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './migrations'
		},
		seeds: {
			directory: './seeds'
		}
	},

	sqlite: {
		client: 'sqlite3',
		connection: {
			filename: './sqlite/db.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './sqlite/migrations'
		},
		seeds: {
			directory: './sqlite/seeds'
		}
	}
};
