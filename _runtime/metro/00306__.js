// _runtime/metro/00306__.js
import get from "00030__.js";

const enforcing = get.getEnforcing("StatusBarManager");
let closure_1 = null;

export default {
  getConstants() {
    if (null == constants) {
      constants = closure_0.getConstants();
    }
    return constants;
  },
  setColor(arg0, animated) {
    closure_0.setColor(arg0, animated);
  },
  setTranslucent(arg0) {
    closure_0.setTranslucent(arg0);
  },
  setStyle(arg0) {
    closure_0.setStyle(arg0);
  },
  setHidden(arg0) {
    closure_0.setHidden(arg0);
  },
};
