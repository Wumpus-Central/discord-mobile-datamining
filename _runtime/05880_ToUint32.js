// === Module 5880: ToUint32 ===

// Module 5880 (ToUint32)
import ToNumber from "ToNumber" /* 5881 */;
import _mod5898 from "module_5898" /* 5898 */;
import truncate from "truncate" /* 5899 */;
import modulo from "modulo" /* 5901 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5898(tmp3)) {
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