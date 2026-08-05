import { I18nManager } from "00412_I18nManager.js";
// _runtime/00411_getConstants.js
if (require("I18nManager")) {
  const constants = require("I18nManager").getConstants();
  let obj = { isRTL: null, doLeftAndRightSwapInRTL: null, localeIdentifier: null };
  ({ isRTL: obj3[0], doLeftAndRightSwapInRTL: obj3[1], localeIdentifier: obj3[2] } = constants);
  const importDefaultResult = require("I18nManager");
} else {
  obj = { isRTL: false, doLeftAndRightSwapInRTL: true };
}

export default {
  getConstants() {
    return obj;
  },
  allowRTL(arg0) {
    if (I18nManager) {
      I18nManager.allowRTL(arg0);
      const tmpResult = I18nManager;
    }
  },
  forceRTL(arg0) {
    if (I18nManager) {
      I18nManager.forceRTL(arg0);
      const tmpResult = I18nManager;
    }
  },
  swapLeftAndRightInRTL(arg0) {
    if (I18nManager) {
      const result = I18nManager.swapLeftAndRightInRTL(arg0);
      const tmpResult = I18nManager;
    }
  },
  isRTL: obj.isRTL,
  doLeftAndRightSwapInRTL: obj.doLeftAndRightSwapInRTL
};