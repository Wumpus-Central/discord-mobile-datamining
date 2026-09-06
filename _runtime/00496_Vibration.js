// _runtime/00496_Vibration.js
import _modDef497 from "metro/00497__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default {
  vibrate(arg0) {
    let num = arg0;
    if (arg0 === undefined) {
      num = 400;
    }
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (typeof num === "number") {
      _modDef497.vibrate(num);
    } else {
      const _Array = Array;
      if (Array.isArray(num)) {
        let num2 = -1;
        if (flag) {
          num2 = 0;
        }
        _modDef497.vibrateByPattern(num, num2);
      } else {
        const _Error = Error;
        const error = new Error("Vibration pattern should be a number or array");
        throw error;
      }
    }
  },
  cancel() {
    _modDef497.cancel();
  },
};
