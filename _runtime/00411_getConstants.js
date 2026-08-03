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
    if (importDefault(412)) {
      importDefault(412).allowRTL(arg0);
      const tmpResult = importDefault(412);
    }
  },
  forceRTL(arg0) {
    if (importDefault(412)) {
      importDefault(412).forceRTL(arg0);
      const tmpResult = importDefault(412);
    }
  },
  swapLeftAndRightInRTL(arg0) {
    if (importDefault(412)) {
      const result = importDefault(412).swapLeftAndRightInRTL(arg0);
      const tmpResult = importDefault(412);
    }
  },
  isRTL: obj.isRTL,
  doLeftAndRightSwapInRTL: obj.doLeftAndRightSwapInRTL
};