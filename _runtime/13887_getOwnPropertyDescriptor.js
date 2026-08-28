// === Module 13887: getOwnPropertyDescriptor ===

// Module 13887 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 13888 */;
import _mod13890 from "module_13890" /* 13890 */;
import text from "text" /* 13897 */;
import _mod13920 from "module_13920" /* 13920 */;

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13890(arg0);
    const tmp4 = text(arg1);
    if (!_mod13920) {
      if (tmp(13908)(tmp3, tmp4)) {
        let tmpResult = tmp(13922);
        tmpResult = tmp(13918);
        return tmpResult(!tmpResult(tmp(13923).f, tmp3, tmp4), tmp3[tmp4]);
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