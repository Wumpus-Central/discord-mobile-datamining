// _runtime/00488_SHORT.js
import ToastAndroid_mod from "00489_ToastAndroid.js";

let ToastAndroid = ToastAndroid_mod;
ToastAndroid = ToastAndroid.getConstants();

export default {
  SHORT: ToastAndroid.SHORT,
  LONG: ToastAndroid.LONG,
  TOP: ToastAndroid.TOP,
  BOTTOM: ToastAndroid.BOTTOM,
  CENTER: ToastAndroid.CENTER,
  show(arg0, arg1) {
    const obj = ToastAndroid;
    obj.show(arg0, arg1);
  },
  showWithGravity(arg0, arg1, arg2) {
    const obj = ToastAndroid;
    obj.showWithGravity(arg0, arg1, arg2);
  },
  showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4) {
    const obj = ToastAndroid;
    const result = obj.showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4);
  },
};
