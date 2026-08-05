import { ToastAndroid } from "00489_ToastAndroid.js";
// _runtime/00488_SHORT.js
const constants = require("ToastAndroid").getConstants();

export default {
  SHORT: constants.SHORT,
  LONG: constants.LONG,
  TOP: constants.TOP,
  BOTTOM: constants.BOTTOM,
  CENTER: constants.CENTER,
  show(arg0, arg1) {
    ToastAndroid.show(arg0, arg1);
  },
  showWithGravity(arg0, arg1, arg2) {
    ToastAndroid.showWithGravity(arg0, arg1, arg2);
  },
  showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4) {
    const result = ToastAndroid.showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4);
  }
};