// === Module 411: I18nManager ===

// Module 411 (I18nManager)
import _modDef412 from "module_412" /* 412 */;

let obj;
if (_modDef412) {
  const importDefaultResult = _modDef412;
  const constants = importDefaultResult.getConstants();
  const obj2 = { isRTL: null, doLeftAndRightSwapInRTL: null, localeIdentifier: null };
  ({ isRTL: obj3.isRTL, doLeftAndRightSwapInRTL: obj3.doLeftAndRightSwapInRTL, localeIdentifier: obj3.localeIdentifier } = constants);
  obj = obj2;
} else {
  obj = { isRTL: false, doLeftAndRightSwapInRTL: true };
}

export default {
  getConstants() {
    return obj;
  },
  allowRTL(arg0) {
    if (_modDef412) {
      const tmpResult = _modDef412;
      tmpResult.allowRTL(arg0);
    }
  },
  forceRTL(arg0) {
    if (_modDef412) {
      const tmpResult = _modDef412;
      tmpResult.forceRTL(arg0);
    }
  },
  swapLeftAndRightInRTL(arg0) {
    if (_modDef412) {
      const tmpResult = _modDef412;
      const result = tmpResult.swapLeftAndRightInRTL(arg0);
    }
  },
  isRTL: obj.isRTL,
  doLeftAndRightSwapInRTL: obj.doLeftAndRightSwapInRTL
};