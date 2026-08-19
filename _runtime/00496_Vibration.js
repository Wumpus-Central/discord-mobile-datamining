// _runtime/00496_Vibration.js
import VibrationDefault from "00497_Vibration.js";

importDefault = arg2;
const dependencyMap = arg6;
arg5.default = {
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
      VibrationDefault.vibrate(num);
    } else {
      const _Array = Array;
      if (Array.isArray(num)) {
        let num2 = -1;
        if (flag) {
          num2 = 0;
        }
        VibrationDefault.vibrateByPattern(num, num2);
      } else {
        const _Error = Error;
        error = new Error("Vibration pattern should be a number or array");
        throw error;
      }
    }
  },
  cancel() {
    VibrationDefault.cancel();
  }
};