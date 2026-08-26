// === Module 13841: getOwnPropertyDescriptor ===

// Module 13841 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 13842 */;
import _mod13844 from "module_13844" /* 13844 */;
import text from "text" /* 13851 */;
import _mod13874 from "module_13874" /* 13874 */;

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13844(arg0);
    const tmp4 = text(arg1);
    if (!_mod13874) {
      if (tmp(13862)(tmp3, tmp4)) {
        let tmpResult = tmp(13876);
        tmpResult = tmp(13872);
        return tmpResult(!tmpResult(tmp(13877).f, tmp3, tmp4), tmp3[tmp4]);
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