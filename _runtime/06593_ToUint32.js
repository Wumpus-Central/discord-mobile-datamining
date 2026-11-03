// _runtime/06593_ToUint32.js
import ToNumber from "06594_ToNumber.js";
import _mod6611 from "metro/06611__.js";
import truncate from "06612_truncate.js";
import modulo from "06614_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6611(tmp3)) {
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
