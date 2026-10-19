// === Module 6355: ToUint32 ===

// Module 6355 (ToUint32)
import ToNumber from "ToNumber" /* 6356 */;
import _mod6373 from "module_6373" /* 6373 */;
import truncate from "truncate" /* 6374 */;
import modulo from "modulo" /* 6376 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6373(tmp3)) {
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