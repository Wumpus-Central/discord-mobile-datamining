// _runtime/00306_getConstants.js
const enforcing = require("get").getEnforcing("StatusBarManager");
let c1 = null;

export default {
  getConstants() {
    if (null == constants) {
      constants = store.getConstants();
    }
    return constants;
  },
  setColor(arg0, animated) {
    store.setColor(arg0, animated);
  },
  setTranslucent(arg0) {
    store.setTranslucent(arg0);
  },
  setStyle(arg0) {
    store.setStyle(arg0);
  },
  setHidden(arg0) {
    store.setHidden(arg0);
  }
};