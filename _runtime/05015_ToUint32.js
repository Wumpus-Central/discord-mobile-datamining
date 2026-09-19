// _runtime/05015_ToUint32.js
import ToNumber from "05016_ToNumber.js";
import _mod5033 from "metro/05033__.js";
import truncate from "05034_truncate.js";
import modulo from "05036_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5033(tmp3)) {
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
