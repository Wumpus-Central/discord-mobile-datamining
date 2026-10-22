// _runtime/06387_ToUint32.js
import ToNumber from "06388_ToNumber.js";
import _mod6405 from "metro/06405__.js";
import truncate from "06406_truncate.js";
import modulo from "06408_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6405(tmp3)) {
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
