// === Module 5881: ToUint32 ===

// Module 5881 (ToUint32)
import ToNumber from "ToNumber" /* 5882 */;
import _mod5899 from "module_5899" /* 5899 */;
import truncate from "truncate" /* 5900 */;
import modulo from "modulo" /* 5902 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5899(tmp3)) {
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