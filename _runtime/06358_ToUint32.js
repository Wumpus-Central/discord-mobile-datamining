// _runtime/06358_ToUint32.js
import ToNumber from "06359_ToNumber.js";
import _mod6376 from "metro/06376__.js";
import truncate from "06377_truncate.js";
import modulo from "06379_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6376(tmp3)) {
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
