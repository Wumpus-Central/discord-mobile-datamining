// === Module 101: getConstants ===

// Module 101 (getConstants)
const enforcing = require("get").getEnforcing("DeviceInfo");
let c1 = null;

export default {
  getConstants() {
    if (null == constants2) {
      constants2 = constants.getConstants();
    }
    return constants2;
  }
};