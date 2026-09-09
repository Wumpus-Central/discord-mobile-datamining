// _runtime/04834_ToUint32.js
import ToNumber from "04835_ToNumber.js";
import _mod4852 from "metro/04852__.js";
import truncate from "04853_truncate.js";
import modulo from "04855_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4852(tmp3)) {
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
