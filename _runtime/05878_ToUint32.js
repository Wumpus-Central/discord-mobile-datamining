// === Module 5878: ToUint32 ===

// Module 5878 (ToUint32)
import ToNumber from "ToNumber" /* 5879 */;
import _mod5896 from "module_5896" /* 5896 */;
import truncate from "truncate" /* 5897 */;
import modulo from "modulo" /* 5899 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5896(tmp3)) {
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