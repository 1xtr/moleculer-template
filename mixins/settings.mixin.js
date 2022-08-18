const { MOL_SERVICE_VERSION, NO_VERSION_PREFIX = false } = process.env
const version =
  typeof Number(MOL_SERVICE_VERSION) === 'number' &&
  !Number.isNaN(Number(MOL_SERVICE_VERSION)) &&
  Number(MOL_SERVICE_VERSION) !== 0
    ? Number(MOL_SERVICE_VERSION)
    : MOL_SERVICE_VERSION

/**
 * @type {import('moleculer').ServiceSchema}
 */
module.exports = {
  version,
  settings: {
    $noVersionPrefix: Boolean(NO_VERSION_PREFIX),
  },
}
