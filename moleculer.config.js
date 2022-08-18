// const HealthMiddleware = require('@r2d2bzh/moleculer-healthcheck-middleware')

/**
 * @type {import('moleculer').ServiceBroker}
 */
module.exports = {
  nodeID: `${process.env.MOL_NODE_NAME}_node_${process.pid}`,
  // namespace, transporter from ENV
  /*   cacher: {
     // redis link from ENV
     type: 'Redis',
     options: {
       ttl: 30, // seconds
     },
   }, */
  logger: ['Console'],
  logLevel: 'info',
  // timeout for all call chain in milliseconds
  requestTimeout: 1000 * 60,
  retryPolicy: {
    retries: 3,
  },
  // Health checker for work in containers
  middlewares: [
    /* HealthMiddleware({
       port: 3333,
     }), */
  ],
}
