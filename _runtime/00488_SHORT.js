const constants = require("ToastAndroid").getConstants();

export default {
  SHORT: constants.SHORT,
  LONG: constants.LONG,
  TOP: constants.TOP,
  BOTTOM: constants.BOTTOM,
  CENTER: constants.CENTER,
  show(arg0, arg1) {
    importDefault(489).show(arg0, arg1);
  },
  showWithGravity(arg0, arg1, arg2) {
    importDefault(489).showWithGravity(arg0, arg1, arg2);
  },
  showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4) {
    const result = importDefault(489).showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4);
  }
};