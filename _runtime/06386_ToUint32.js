// === Module 6386: ToUint32 ===

// Module 6386 (ToUint32)
import ToNumber from "ToNumber" /* 6387 */;
import _mod6404 from "module_6404" /* 6404 */;
import truncate from "truncate" /* 6405 */;
import modulo from "modulo" /* 6407 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6404(tmp3)) {
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