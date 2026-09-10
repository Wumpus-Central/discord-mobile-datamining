// _runtime/04865_ToUint32.js
import ToNumber from "04866_ToNumber.js";
import _mod4883 from "metro/04883__.js";
import truncate from "04884_truncate.js";
import modulo from "04886_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4883(tmp3)) {
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
