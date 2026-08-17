// _runtime/00101_getConstants.js
import getAll from "00030_get.js";

const enforcing = getAll.getEnforcing("DeviceInfo");
let c1 = null;

export default {
  getConstants() {
    if (null == constants2) {
      constants2 = constants.getConstants();
    }
    return constants2;
  }
};