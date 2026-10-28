// === Module 6436: ToUint32 ===

// Module 6436 (ToUint32)
import ToNumber from "ToNumber" /* 6437 */;
import _mod6454 from "module_6454" /* 6454 */;
import truncate from "truncate" /* 6455 */;
import modulo from "modulo" /* 6457 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6454(tmp3)) {
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