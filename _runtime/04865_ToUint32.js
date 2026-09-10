// === Module 4865: ToUint32 ===

// Module 4865 (ToUint32)
import ToNumber from "ToNumber" /* 4866 */;
import _mod4883 from "module_4883" /* 4883 */;
import truncate from "truncate" /* 4884 */;
import modulo from "modulo" /* 4886 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4883(tmp3)) {
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