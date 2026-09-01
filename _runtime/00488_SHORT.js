// _runtime/00488_SHORT.js
import ToastAndroidDefault from "00489_ToastAndroid.js";

const constants = ToastAndroidDefault.getConstants();

export default {
  SHORT: constants.SHORT,
  LONG: constants.LONG,
  TOP: constants.TOP,
  BOTTOM: constants.BOTTOM,
  CENTER: constants.CENTER,
  show(arg0, arg1) {
    ToastAndroidDefault.show(arg0, arg1);
  },
  showWithGravity(arg0, arg1, arg2) {
    ToastAndroidDefault.showWithGravity(arg0, arg1, arg2);
  },
  showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4) {
    const result = ToastAndroidDefault.showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4);
  },
};
