// === Module 14177: getOwnPropertyDescriptor ===

// Module 14177 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 14178 */;
import _mod14180 from "module_14180" /* 14180 */;
import text from "text" /* 14187 */;
import _mod14210 from "module_14210" /* 14210 */;

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14180(arg0);
    const tmp4 = text(arg1);
    if (!_mod14210) {
      if (tmp(14198)(tmp3, tmp4)) {
        let tmpResult = tmp(14212);
        tmpResult = tmp(14208);
        return tmpResult(!tmpResult(tmp(14213).f, tmp3, tmp4), tmp3[tmp4]);
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