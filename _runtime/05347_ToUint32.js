// === Module 5347: ToUint32 ===

// Module 5347 (ToUint32)
import ToNumber from "ToNumber" /* 5348 */;
import _mod5365 from "module_5365" /* 5365 */;
import truncate from "truncate" /* 5366 */;
import modulo from "modulo" /* 5368 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5365(tmp3)) {
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