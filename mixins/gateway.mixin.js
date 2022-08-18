const ApiGateway = require('moleculer-web')

/**
 * @extends {import('moleculer-web').ApiRouteSchema}
 * @type {import('moleculer').ServiceSchema}
 */
module.exports = {
  mixins: [ApiGateway],
  settings: {
    // default port 3000
    port: process.env.PORT || 3000,
    routes: [
      {
        path: `/api`,
        mappingPolicy: 'restrict', // enable to request only the routes with aliases
        onBeforeCall(ctx, route, req) {
          // Set request headers to context meta
          ctx.meta.headers = req.headers
        },
        aliases: {
          'GET hello': `template.hello`,
        },

        whitelist: [`template.*`],
        bodyParsers: {
          urlencoded: {
            extended: true,
            limit: '5mb',
          },
          json: {
            limit: '5MB',
          },
        },
      },
    ],
  },
}
