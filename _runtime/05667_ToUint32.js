// _runtime/05667_ToUint32.js
import ToNumber from "05668_ToNumber.js";
import _mod5685 from "metro/05685__.js";
import truncate from "05686_truncate.js";
import modulo from "05688_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5685(tmp3)) {
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
