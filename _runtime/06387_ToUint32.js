// === Module 6387: ToUint32 ===

// Module 6387 (ToUint32)
import ToNumber from "ToNumber" /* 6388 */;
import _mod6405 from "module_6405" /* 6405 */;
import truncate from "truncate" /* 6406 */;
import modulo from "modulo" /* 6408 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6405(tmp3)) {
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