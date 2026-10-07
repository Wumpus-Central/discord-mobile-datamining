// === Module 83: ? ===

// Module 83
import get from "module_30" /* 30 */;

const constants = get.getEnforcing("SourceCode");
let closure_1 = null;

export default {
  getConstants() {
    if (null == constants2) {
      constants2 = constants.getConstants();
    }
    return constants2;
  }
};