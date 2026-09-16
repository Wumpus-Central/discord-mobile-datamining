// === Module 4898: ToUint32 ===

// Module 4898 (ToUint32)
import ToNumber from "ToNumber" /* 4899 */;
import _mod4916 from "module_4916" /* 4916 */;
import truncate from "truncate" /* 4917 */;
import modulo from "modulo" /* 4919 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4916(tmp3)) {
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