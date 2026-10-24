// === Module 6401: ToUint32 ===

// Module 6401 (ToUint32)
import ToNumber from "ToNumber" /* 6402 */;
import _mod6419 from "module_6419" /* 6419 */;
import truncate from "truncate" /* 6420 */;
import modulo from "modulo" /* 6422 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6419(tmp3)) {
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