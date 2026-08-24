// === Module 13733: getOwnPropertyDescriptor ===

// Module 13733 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 13734 */;
import _mod13736 from "module_13736" /* 13736 */;
import text from "text" /* 13743 */;
import _mod13766 from "module_13766" /* 13766 */;

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13736(arg0);
    const tmp4 = text(arg1);
    if (!_mod13766) {
      if (tmp(13754)(tmp3, tmp4)) {
        let tmpResult = tmp(13768);
        tmpResult = tmp(13764);
        return tmpResult(!tmpResult(tmp(13769).f, tmp3, tmp4), tmp3[tmp4]);
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