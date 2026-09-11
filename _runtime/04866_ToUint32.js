// === Module 4866: ToUint32 ===

// Module 4866 (ToUint32)
import ToNumber from "ToNumber" /* 4867 */;
import _mod4884 from "module_4884" /* 4884 */;
import truncate from "truncate" /* 4885 */;
import modulo from "modulo" /* 4887 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4884(tmp3)) {
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