// === Module 4402: ToUint32 ===

// Module 4402 (ToUint32)
import ToNumber from "ToNumber" /* 4403 */;
import isFinite from "isFinite" /* 4420 */;
import truncate from "truncate" /* 4421 */;
import modulo from "modulo" /* 4423 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (isFinite(tmp3)) {
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