// === Module 6473: ToUint32 ===

// Module 6473 (ToUint32)
import ToNumber from "ToNumber" /* 6474 */;
import _mod6491 from "module_6491" /* 6491 */;
import truncate from "truncate" /* 6492 */;
import modulo from "modulo" /* 6494 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6491(tmp3)) {
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