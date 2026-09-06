// _runtime/00411_I18nManager.js
import _modDef412 from "metro/00412__.js";

if (_modDef412) {
  const constants = _modDef412.getConstants();
  let obj = { isRTL: null, doLeftAndRightSwapInRTL: null, localeIdentifier: null };
  ({
    isRTL: obj3.isRTL,
    doLeftAndRightSwapInRTL: obj3.doLeftAndRightSwapInRTL,
    localeIdentifier: obj3.localeIdentifier,
  } = constants);
  const importDefaultResult = _modDef412;
} else {
  obj = { isRTL: false, doLeftAndRightSwapInRTL: true };
}

export default {
  getConstants() {
    return obj;
  },
  allowRTL(arg0) {
    if (_modDef412) {
      _modDef412.allowRTL(arg0);
      const tmpResult = _modDef412;
    }
  },
  forceRTL(arg0) {
    if (_modDef412) {
      _modDef412.forceRTL(arg0);
      const tmpResult = _modDef412;
    }
  },
  swapLeftAndRightInRTL(arg0) {
    if (_modDef412) {
      const result = _modDef412.swapLeftAndRightInRTL(arg0);
      const tmpResult = _modDef412;
    }
  },
  isRTL: obj.isRTL,
  doLeftAndRightSwapInRTL: obj.doLeftAndRightSwapInRTL,
};
