// === Module 5100: ToUint32 ===

// Module 5100 (ToUint32)
import ToNumber from "ToNumber" /* 5101 */;
import _mod5118 from "module_5118" /* 5118 */;
import truncate from "truncate" /* 5119 */;
import modulo from "modulo" /* 5121 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5118(tmp3)) {
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
};