// === Module 14193: getOwnPropertyDescriptor ===

// Module 14193 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 14194 */;
import _mod14196 from "module_14196" /* 14196 */;
import text from "text" /* 14203 */;
import _mod14226 from "module_14226" /* 14226 */;

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14196(arg0);
    const tmp4 = text(arg1);
    if (!_mod14226) {
      if (tmp(14214)(tmp3, tmp4)) {
        let tmpResult = tmp(14228);
        tmpResult = tmp(14224);
        return tmpResult(!tmpResult(tmp(14229).f, tmp3, tmp4), tmp3[tmp4]);
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