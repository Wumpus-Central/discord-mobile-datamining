// === Module 4896: ToUint32 ===

// Module 4896 (ToUint32)
import ToNumber from "ToNumber" /* 4897 */;
import _mod4914 from "module_4914" /* 4914 */;
import truncate from "truncate" /* 4915 */;
import modulo from "modulo" /* 4917 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4914(tmp3)) {
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