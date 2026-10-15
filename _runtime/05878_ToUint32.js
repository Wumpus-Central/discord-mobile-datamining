// _runtime/05878_ToUint32.js
import ToNumber from "05879_ToNumber.js";
import _mod5896 from "metro/05896__.js";
import truncate from "05897_truncate.js";
import modulo from "05899_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5896(tmp3)) {
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
