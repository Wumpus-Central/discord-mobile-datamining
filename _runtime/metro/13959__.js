// === Module 13959: ? ===

// Module 13959
import _mod13960 from "module_13960" /* 13960 */;
import _mod13962 from "module_13962" /* 13962 */;
import text from "text" /* 13969 */;
import _mod13980 from "module_13980" /* 13980 */;
import _mod13990 from "module_13990" /* 13990 */;
import _mod13992 from "module_13992" /* 13992 */;
import _mod13994 from "module_13994" /* 13994 */;
import _mod13995 from "module_13995" /* 13995 */;

if (!_mod13960) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13962(arg0);
    const tmp4 = text(arg1);
    if (!_mod13992) {
      if (_mod13980(tmp3, tmp4)) {
        const tmpResult = _mod13994;
        return tmpResult(!_mod13990(_mod13995.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {
      }
    }
  };
}

export const f = getOwnPropertyDescriptor;