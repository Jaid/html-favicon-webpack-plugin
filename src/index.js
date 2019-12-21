/** @module html-favicon-webpack-plugin */

import path from "path"

const debug = require("debug")(_PKG_NAME)

/**
 * @typedef {Object} Options
 */

/**
 * @class
 */
export default class PkgBannerPlugin {

  /**
   * @constructor
   * @param {Options} [options] Plugin options
   */
  constructor(options) {
    this.options = {
      ...options,
    }
  }

  /**
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    compiler.hooks.compilation.tap(_PKG_NAME, compilation => {
      compiler.hooks.beforeAssetTagGeneration.alterAssetTagGroups.tapAsync(_PKG_NAME, (data, cb) => {
        data.html += "The Magic Footer"
        cb(null, data)
      })
    })
  }

}