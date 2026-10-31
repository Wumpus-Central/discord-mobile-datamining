// _runtime/06473_ToUint32.js
import ToNumber from "06474_ToNumber.js";
import _mod6491 from "metro/06491__.js";
import truncate from "06492_truncate.js";
import modulo from "06494_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6491(tmp3)) {
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
