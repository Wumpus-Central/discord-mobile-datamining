// _runtime/04725_ToUint32.js
import ToNumber from "04726_ToNumber.js";
import isFinite from "04743_isFinite.js";


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (isFinite(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4746)(tmp(4744)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};