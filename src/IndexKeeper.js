'use_strict'

const proxyMethods = [
  'createIndex',
  'deleteIndex'
]

class IndexKeeper {
  constructor (Scout) {
    this.engine = Scout.engine(this.constructor.driver)
  }

  /**
   * Get the engine driver to be used.
   *
   * If null is given, the default engine driver will be used.
   *
   * @return {Null|String}
   */
  static get driver () {
    return null
  }

  /**
   * This method will be called to create the index.
   *
   * @return {void}
   */
  up () {
    // ...
  }

  /**
   * This method will be called to drop the index.
   *
   * @return {void}
   */
  down () {
    // ...
  }
}

proxyMethods.forEach(method => {
  IndexKeeper.prototype[method] = function (...params) {
    return this.engine[method](...params)
  }
})

module.exports = IndexKeeper