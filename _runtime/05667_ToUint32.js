// === Module 5667: ToUint32 ===

// Module 5667 (ToUint32)
import ToNumber from "ToNumber" /* 5668 */;
import _mod5685 from "module_5685" /* 5685 */;
import truncate from "truncate" /* 5686 */;
import modulo from "modulo" /* 5688 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5685(tmp3)) {
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