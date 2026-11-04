// === Module 6608: ToUint32 ===

// Module 6608 (ToUint32)
import ToNumber from "ToNumber" /* 6609 */;
import _mod6626 from "module_6626" /* 6626 */;
import truncate from "truncate" /* 6627 */;
import modulo from "modulo" /* 6629 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod6626(tmp3)) {
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