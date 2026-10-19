// _runtime/06355_ToUint32.js
import ToNumber from "06356_ToNumber.js";
import _mod6373 from "metro/06373__.js";
import truncate from "06374_truncate.js";
import modulo from "06376_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6373(tmp3)) {
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
