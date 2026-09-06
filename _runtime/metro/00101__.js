// _runtime/metro/00101__.js
import get from "00030__.js";

const constants = get.getEnforcing("DeviceInfo");
let closure_1 = null;

export default {
  getConstants() {
    if (null == constants2) {
      constants2 = constants.getConstants();
    }
    return constants2;
  },
};
