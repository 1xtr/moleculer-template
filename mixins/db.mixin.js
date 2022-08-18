const DbService = require('moleculer-db')
const MongooseAdapter = require('moleculer-db-adapter-mongoose')
const { model, Schema } = require('mongoose')

/**
 * @type {import('moleculer-db').DbService}
 */
module.exports = {
  mixins: [DbService],
  adapter: new MongooseAdapter(`${process.env.MONGO_URI}`, {
    authSource: process.env.MONGO_DB_AUTHSOURCE,
    dbName: process.env.MONGO_DB_NAME,
    user: process.env.MONGO_DB_USER,
    pass: process.env.MONGO_DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
  }),
  model: model(
    'Template',
    new Schema(
      {
        id: Number,
        template: String,
      },
      { timestamps: true }
    )
  ),
  /* settings: {
     fields: ['id', 'template'],
   }, */
}
