// === Module 5110: ToUint32 ===

// Module 5110 (ToUint32)
import ToNumber from "ToNumber" /* 5111 */;
import _mod5128 from "module_5128" /* 5128 */;
import truncate from "truncate" /* 5129 */;
import modulo from "modulo" /* 5131 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5128(tmp3)) {
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