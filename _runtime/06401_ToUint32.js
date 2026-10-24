// _runtime/06401_ToUint32.js
import ToNumber from "06402_ToNumber.js";
import _mod6419 from "metro/06419__.js";
import truncate from "06420_truncate.js";
import modulo from "06422_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6419(tmp3)) {
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
