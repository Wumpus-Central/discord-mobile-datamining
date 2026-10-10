// === Module 5662: ToUint32 ===

// Module 5662 (ToUint32)
import ToNumber from "ToNumber" /* 5663 */;
import _mod5680 from "module_5680" /* 5680 */;
import truncate from "truncate" /* 5681 */;
import modulo from "modulo" /* 5683 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5680(tmp3)) {
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