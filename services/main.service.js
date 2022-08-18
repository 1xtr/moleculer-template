// const dbMixin = require('../mixins/db.mixin')
// const gatewayMixin = require('../mixins/gateway.mixin')

/**
 * @type {import('moleculer').ServiceSchema}
 */
module.exports = {
  name: 'template',
  mixins: [
    /* dbMixin, gatewayMixin */
  ],
  actions: {
    /**
     * @param {import('moleculer').Context} ctx
     * @returns {string}
     */
    hello(ctx) {
      this.logger.info(`Hello from ${ctx.action?.name} ${this.broker.nodeID}`)
      return `Hello from ${ctx.action?.name} ${this.broker.nodeID}`
    },
  },
  methods: {},
}
