// _runtime/04402_ToUint32.js
import ToNumber from "04403_ToNumber.js";
import isFinite from "04420_isFinite.js";
import truncate from "04421_truncate.js";
import modulo from "04423_modulo.js";


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (isFinite(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = modulo(truncate(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};