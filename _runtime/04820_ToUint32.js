// _runtime/04820_ToUint32.js
import ToNumber from "04821_ToNumber.js";
import isFinite from "04838_isFinite.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (isFinite(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4841)(tmp(4839)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
}
