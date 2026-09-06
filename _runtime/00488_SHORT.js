// _runtime/00488_SHORT.js
import ToastAndroid from "00489_ToastAndroid.js";

ToastAndroid = ToastAndroid.getConstants();

export default {
  SHORT: ToastAndroid.SHORT,
  LONG: ToastAndroid.LONG,
  TOP: ToastAndroid.TOP,
  BOTTOM: ToastAndroid.BOTTOM,
  CENTER: ToastAndroid.CENTER,
  show(arg0, arg1) {
    ToastAndroid.show(arg0, arg1);
  },
  showWithGravity(arg0, arg1, arg2) {
    ToastAndroid.showWithGravity(arg0, arg1, arg2);
  },
  showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4) {
    const result = ToastAndroid.showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4);
  },
};
