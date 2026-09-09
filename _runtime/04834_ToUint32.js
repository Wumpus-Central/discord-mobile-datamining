// === Module 4834: ToUint32 ===

// Module 4834 (ToUint32)
import ToNumber from "ToNumber" /* 4835 */;
import _mod4852 from "module_4852" /* 4852 */;
import truncate from "truncate" /* 4853 */;
import modulo from "modulo" /* 4855 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4852(tmp3)) {
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