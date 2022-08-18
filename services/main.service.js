// const dbMixin = require('../mixins/db.mixin')
// const gatewayMixin = require('../mixins/gateway.mixin')
const settingsMixin = require('../mixins/settings.mixin')

/**
 * @type {import('moleculer').ServiceSchema}
 */
module.exports = {
  name: 'template',
  mixins: [ settingsMixin
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
