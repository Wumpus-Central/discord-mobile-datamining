// _runtime/04898_ToUint32.js
import ToNumber from "04899_ToNumber.js";
import _mod4916 from "metro/04916__.js";
import truncate from "04917_truncate.js";
import modulo from "04919_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4916(tmp3)) {
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
