// _runtime/00083_getConstants.js
import getAll from "00030_get.js";

const enforcing = getAll.getEnforcing("SourceCode");
let c1 = null;

export default {
  getConstants() {
    if (null == constants2) {
      constants2 = constants.getConstants();
    }
    return constants2;
  }
};