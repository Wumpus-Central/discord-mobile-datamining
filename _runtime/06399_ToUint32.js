// === Module 6399: ToUint32 ===

// Module 6399 (ToUint32)
import ToNumber from "ToNumber" /* 6400 */;
import _mod6417 from "module_6417" /* 6417 */;
import truncate from "truncate" /* 6418 */;
import modulo from "modulo" /* 6420 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6417(tmp3)) {
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