// _runtime/06611_ToUint32.js
import ToNumber from "06612_ToNumber.js";
import _mod6629 from "metro/06629__.js";
import truncate from "06630_truncate.js";
import modulo from "06632_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6629(tmp3)) {
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
