// _runtime/00083_getConstants.js
const enforcing = require("get").getEnforcing("SourceCode");
let c1 = null;

export default {
  getConstants() {
    if (null == constants2) {
      constants2 = constants.getConstants();
    }
    return constants2;
  }
};