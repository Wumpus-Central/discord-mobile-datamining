// === Module 5276: ToUint32 ===

// Module 5276 (ToUint32)
import ToNumber from "ToNumber" /* 5277 */;
import _mod5294 from "module_5294" /* 5294 */;
import truncate from "truncate" /* 5295 */;
import modulo from "modulo" /* 5297 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5294(tmp3)) {
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