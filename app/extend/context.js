'use strict';
const { NOS } = require('../../lib/nos')

module.exports = {
  /**
   * NOS Singleton instance
   * @member Context#nos
   * @since 1.0.0
   * @see App#nos
   */
  get nos() {
    return this.app[NOS];
  },
};
