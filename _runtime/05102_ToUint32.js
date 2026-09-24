// === Module 5102: ToUint32 ===

// Module 5102 (ToUint32)
import ToNumber from "ToNumber" /* 5103 */;
import _mod5120 from "module_5120" /* 5120 */;
import truncate from "truncate" /* 5121 */;
import modulo from "modulo" /* 5123 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5120(tmp3)) {
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