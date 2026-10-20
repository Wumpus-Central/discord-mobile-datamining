// === Module 6358: ToUint32 ===

// Module 6358 (ToUint32)
import ToNumber from "ToNumber" /* 6359 */;
import _mod6376 from "module_6376" /* 6376 */;
import truncate from "truncate" /* 6377 */;
import modulo from "modulo" /* 6379 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6376(tmp3)) {
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