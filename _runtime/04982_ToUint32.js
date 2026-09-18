// === Module 4982: ToUint32 ===

// Module 4982 (ToUint32)
import ToNumber from "ToNumber" /* 4983 */;
import _mod5000 from "module_5000" /* 5000 */;
import truncate from "truncate" /* 5001 */;
import modulo from "modulo" /* 5003 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5000(tmp3)) {
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