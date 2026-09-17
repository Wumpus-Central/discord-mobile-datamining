// _runtime/04900_ToUint32.js
import ToNumber from "04901_ToNumber.js";
import _mod4918 from "metro/04918__.js";
import truncate from "04919_truncate.js";
import modulo from "04921_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4918(tmp3)) {
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
}
