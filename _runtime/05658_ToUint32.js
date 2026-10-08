// === Module 5658: ToUint32 ===

// Module 5658 (ToUint32)
import ToNumber from "ToNumber" /* 5659 */;
import _mod5676 from "module_5676" /* 5676 */;
import truncate from "truncate" /* 5677 */;
import modulo from "modulo" /* 5679 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5676(tmp3)) {
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