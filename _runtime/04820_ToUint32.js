// _runtime/04820_ToUint32.js
import ToNumber from "04821_ToNumber.js";
import _mod4838 from "metro/04838__.js";
import truncate from "04839_truncate.js";
import modulo from "04841_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4838(tmp3)) {
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
