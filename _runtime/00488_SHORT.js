// === Module 488: SHORT ===

// Module 488 (SHORT)
import ToastAndroid_mod from "ToastAndroid" /* 489 */;

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
  }
};