// === Module 5659: ToUint32 ===

// Module 5659 (ToUint32)
import ToNumber from "ToNumber" /* 5660 */;
import _mod5677 from "module_5677" /* 5677 */;
import truncate from "truncate" /* 5678 */;
import modulo from "modulo" /* 5680 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5677(tmp3)) {
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