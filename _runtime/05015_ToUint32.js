// === Module 5015: ToUint32 ===

// Module 5015 (ToUint32)
import ToNumber from "ToNumber" /* 5016 */;
import _mod5033 from "module_5033" /* 5033 */;
import truncate from "truncate" /* 5034 */;
import modulo from "modulo" /* 5036 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5033(tmp3)) {
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