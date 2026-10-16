// _runtime/05881_ToUint32.js
import ToNumber from "05882_ToNumber.js";
import _mod5899 from "metro/05899__.js";
import truncate from "05900_truncate.js";
import modulo from "05902_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5899(tmp3)) {
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
