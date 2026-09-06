// === Module 4820: ToUint32 ===

// Module 4820 (ToUint32)
import ToNumber from "ToNumber" /* 4821 */;
import _mod4838 from "module_4838" /* 4838 */;
import truncate from "truncate" /* 4839 */;
import modulo from "modulo" /* 4841 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4838(tmp3)) {
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