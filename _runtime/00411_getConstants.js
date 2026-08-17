// _runtime/00411_getConstants.js
import I18nManagerDefault from "00412_I18nManager.js";

if (I18nManagerDefault) {
  const constants = I18nManagerDefault.getConstants();
  let obj = { isRTL: null, doLeftAndRightSwapInRTL: null, localeIdentifier: null };
  ({ isRTL: obj3[0], doLeftAndRightSwapInRTL: obj3[1], localeIdentifier: obj3[2] } = constants);
  const importDefaultResult = I18nManagerDefault;
} else {
  obj = { isRTL: false, doLeftAndRightSwapInRTL: true };
}

export default {
  getConstants() {
    return obj;
  },
  allowRTL(arg0) {
    if (I18nManagerDefault) {
      I18nManagerDefault.allowRTL(arg0);
      const tmpResult = I18nManagerDefault;
    }
  },
  forceRTL(arg0) {
    if (I18nManagerDefault) {
      I18nManagerDefault.forceRTL(arg0);
      const tmpResult = I18nManagerDefault;
    }
  },
  swapLeftAndRightInRTL(arg0) {
    if (I18nManagerDefault) {
      const result = I18nManagerDefault.swapLeftAndRightInRTL(arg0);
      const tmpResult = I18nManagerDefault;
    }
  },
  isRTL: obj.isRTL,
  doLeftAndRightSwapInRTL: obj.doLeftAndRightSwapInRTL
};